import React, { useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/counter";
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

  const [title, setTitle] = useState('')

  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(bodyInputRef.current)
  }

  return (
    <div className="App">
      <form>
        {/*Управляемый компонент*/}
        <MyInput
          value = {title}
          onChange = {e => setTitle(e.target.value)}
          type ="text" 
          placeholder = "название поста"
        />
        {/*неуправляемый компонент*/}
        <MyInput
          ref = {bodyInputRef}
          type ="text" 
          placeholder = "описание поста"
        />
        <MyButton onClick = {addNewPost} >Создать пост</MyButton>
      </form>
      <PostList posts = {posts} title = "список постов 1"/>
    </div>
  );

}

export default App;
