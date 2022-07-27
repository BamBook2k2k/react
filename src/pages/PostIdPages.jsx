import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

function PostIdPages() {
    const params = useParams()
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
    }, [])
    
    return (
    <div>
        <h1>открыл id = {params.id}</h1>
        {isLoading
            ? <Loader/>
            : <div>{post.id}. {post.title}</div>
        }
        
    </div>
    );
};

export default PostIdPages;