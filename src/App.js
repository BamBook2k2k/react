import axios from "axios";
import React, { useEffect, useMemo, useRef, useState } from "react";
import PostService from "./API/PostService";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/counter";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import Loader from "./components/UI/Loader/Loader";
import MyModal from "./components/UI/MyModal/MyModal";
import MySelect from "./components/UI/select/MySelect";
import { useFetching } from "./hooks/useFetching";
import { usePosts } from "./hooks/usePost";
import './styles/App.css';
import { getPageArray, getPageCount } from "./utils/pages";

function App() {
  const [posts, setPosts] = useState ([])
  const [filter, setFilter] = useState ({sort: '', query: ''})
  const [modal, setModal] = useState (false);
  const [totalPages, setTotalPages] = useState (0);
  const [limit, setLimit] = useState (10);
  const [page, setPage] = useState (1);
  const sortedAndSearchedPosts = usePosts (posts, filter.sort, filter.query);

  //сделать надо через юз мемо что бы не отрисовывало каждый раз
  let pagesArray = getPageArray (totalPages);

  const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
    const response = await PostService.getAll(limit, page);
    setPosts (response.data)
    const totalCount = response.headers ['x-total-count']
    setTotalPages (getPageCount (totalCount, limit));
  })

  useEffect ( () => {
    fetchPosts ()
  }, [])

  const createPost = (newPost) => {
    setPosts ([...posts, newPost])
    setModal (false)
  }

  //получаем пост из дочернего компорнента
  const removePost = (post) => {
    setPosts (posts.filter(p => p.id !==post.id))
  }

  const changePage = (page) => {
    setPage (page)
    fetchPosts()
  }

  return (
    <div className="App">
      <button onClick= {fetchPosts}>Get post</button>
      <MyButton style = {{marginTop: 30}} onClick = {() => setModal(true)}>
        Новый пост
      </MyButton>
      <MyModal visible = {modal} setVisible = {setModal}>
        <PostForm create = {createPost}/>
      </MyModal>
      <hr style = {{margin: '15px 0'}}/>
      <PostFilter 
        filter = {filter}
        setFilter = {setFilter}
      />
      {postError &&
        <h1>Произошла ошибка ${postError}</h1>
      }
      {isPostsLoading
        ? <div style = {{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
        : <PostList remove = {removePost} posts = {sortedAndSearchedPosts} title = "список постов 1"/>
      }

      <div className="page__wrapper">
        {pagesArray.map(p =>
          <span 
            onClick = {() => changePage (p)}
            key = {p} 
            className={page === p ? 'page page__current' : 'page'}
          >
            {p}
          </span>
        )}
      </div>

    </div>
  );

}

export default App;
