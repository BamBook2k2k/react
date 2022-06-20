import axios from "axios";
import React, { useMemo, useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/counter";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MyModal from "./components/UI/MyModal/MyModal";
import MySelect from "./components/UI/select/MySelect";
import { usePosts } from "./hooks/usePost";
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState ([])
  const [filter, setFilter] = useState ({sort: '', query: ''})
  const [modal, setModal] = useState (false);
  const sortedAndSearchedPosts = usePosts (posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts ([...posts, newPost])
    setModal (false)
  }

  async function fetchPosts () {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts (response.data)
  }

  //получаем пост из дочернего компорнента
  const removePost = (post) => {
    setPosts (posts.filter(p => p.id !==post.id))
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
      <PostList remove = {removePost} posts = {sortedAndSearchedPosts} title = "список постов 1"/>
    </div>
  );

}

export default App;
