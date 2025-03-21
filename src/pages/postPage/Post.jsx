import React from 'react';
import {useParams,Link } from "react-router-dom";

const Post = ({posts}) => {
    const { id } = useParams();
    const post = posts.find((post) => post.id === id)
    return (
        <div className="centerBlock">
            <Link to={`/post/editor/${id}`} className={"linkEditor"}>Редактировать пост</Link>
            <div className={"post postPage"}>
                <div className="blockImage">
                    <img src={post.img} alt={`На изображении: ${post.title}`}/>
                </div>
                <h2>{post.title}</h2>
                <p className="authorPost">{post.nameAuthor}</p>
                <p>{post.description}</p>
            </div>
        </div>
    );
};

export default Post;