import React, {useEffect, useState} from 'react';
import {useParams,Link} from "react-router-dom";

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState({})
    useEffect(()=>{
        const [...save] = JSON.parse(localStorage.getItem('posts'))
        setPost(save.find(post=>post.id === id))
    },[])
    return (
        <div>
            <div className={"postImg"}>
                <img src={post.img} alt={`На изображении: ${post.title}`}/>
            </div>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p style={{textAlign:"end"}}>{post.nameAuthor}</p>
            <Link to={`/post/editor/${id}`}>Редактировать пост</Link>
        </div>
    );
};

export default Post;