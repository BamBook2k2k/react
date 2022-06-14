import React, { useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/counter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState ([
    {id:1, title: 'JavaScript', body: 'Description'},
    {id:2, title: 'JavaScript 2', body: 'Description'},
    {id:3, title: 'JavaScript 3', body: 'Description'},
  ])

  const createPost = (newPost) => {
    setPosts([...post, newPost])
  }

  return (
    <div className="App">
      <PostForm create = {createPost}/>
      <PostList posts = {posts} title = "список постов 1"/>
    </div>
  );

}

export default App;
