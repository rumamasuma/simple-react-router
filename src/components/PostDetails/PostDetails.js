import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const PostDetails = () => {

const {postId} =useParams();

const [post, setPost] =useState({});

const history = useHistory();

useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(data => setPost(data));
},[]);
        const handleBackPost =() => {
          history.push('/home');
           }

    return (
        <div>
            <h2>All post details</h2>
        <h3>Post Detail of {postId}</h3>
        <h4>Title - {post.title}</h4>
        <p>{post.body}</p>
        <button onClick ={handleBackPost}>Back to posts</button>
        </div>
    );
};

export default PostDetails;