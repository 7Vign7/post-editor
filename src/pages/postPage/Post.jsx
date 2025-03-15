import React, {useEffect, useState} from 'react';
import {useParams,Link } from "react-router-dom";

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState({})
    useEffect(()=>{
        const [...save] = JSON.parse(localStorage.getItem('posts'))
        setPost(save.find(post=>post.id === id))
    },[])
    return (
        <div className="centerBlock">
            <div className={"post postPage"}>
                <Link to={`/post/editor/${id}`} className={"linkEditor"}>Редактировать пост</Link>
                <div className={"blockImg"}>
                    <img style={{width: "100%"}} src={post.img} alt={`На изображении: ${post.title}`}/>
                </div>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <p style={{textAlign: "end"}}>{post.nameAuthor}</p>
            </div>
        </div>
    );
};

export default Post;