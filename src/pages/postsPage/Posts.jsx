import React from 'react';
import {Link} from "react-router-dom";

const Posts = ({posts}) => {

    return (
        <div className="posts">
            {posts.map((post)=>{ //тут можно было бы добавить index и в линк подсавить именно индекс, чтобы обращаться сразу к посту по индксу, но я решил сделать через find
                return(
                <Link  className="postInList" key={post.id} to={`/post/${post.id}`}>
                    <img className="postsImg" src={post.img} alt={`На изображении: ${post.title}`}/>
                    <h2>{post.title}</h2>
                    <p className="postsTextRestrictions">{post.description}</p>
                    <p className="authorPost">{post.nameAuthor}</p>
                </Link>
                )
                })
            }
        </div>
    );
};

export default Posts;