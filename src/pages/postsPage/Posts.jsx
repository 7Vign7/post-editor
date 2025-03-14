import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        const checkPosts = localStorage.getItem('posts');
        if (checkPosts) {
            setPosts(JSON.parse(checkPosts));
        }
    },[])
    return (
        <div className={"posts"}>
            {posts.map((post)=>{ //тут можно было бы добавить index и в линк подсавить именно индекс, чтобы обращаться сразу к посту по индксу, но я решил сделать через find
                return(
                <Link  className={"post"} key={post.id} to={`/post/${post.id}`}>
                    <div className={"postImg"}>
                        <img src={post.img} alt={`На изображении: ${post.title}`}/>
                    </div>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p style={{textAlign:"end"}}>{post.nameAuthor}</p>
                </Link>
                )
                })
            }
        </div>
    );
};

export default Posts;