import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Error from '../pages/Error'
import PostIdPages from '../pages/PostIdPages'
import Posts from '../pages/Posts'

function AppRouter() {
    return (
    <Routes>
        <Route path="/about" element={<About />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/posts/:id" element={<PostIdPages />} />
        <Route path="/error" element={<Error />} />
        <Route path="/posts" element={<Navigate replace to="/error" />} />
    </Routes>
    )
}

export default AppRouter