import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import About from "./pages/About";
import Posts from "./pages/Posts";
import './styles/App.css';

function App() {
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts" element={<Navigate replace to="/posts" />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App;
