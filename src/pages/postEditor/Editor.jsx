import React, {useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";

const Editor = (postInfo) => {
    const {posts} = postInfo;
    const {editPost} = postInfo;
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(posts.find((post) => post.id === id));
    const [errors, setErrors] = useState("");

    const formSubmit = (e) => {
        e.preventDefault();
        if(errors !== ""){
            alert(`Исправьте ошибку: ${errors}`)
        }else{
            let posts = JSON.parse(localStorage.getItem('posts'))
            const searchIndex = posts.findIndex(post=>post.id === id);
            posts[searchIndex] = post;
            localStorage.setItem('posts', JSON.stringify(posts));
            editPost(JSON.parse(localStorage.getItem('posts')))
            navigate(`/post/${id}`);
        }
    };

    const checkImageUrl = (str) =>{
        const imgUrl = /\.(jpeg|jpg|png|gif|webp|svg|bmp)$/i;
        return imgUrl.test(str)
    }

    const inputChange = (e) => {
        const {name, value} = e.target;
        if(name === "img" && !checkImageUrl(value)){
            setErrors("Это не ссылка на изображение!")
        }else{
            setErrors("")
        }
        setPost((previosPost)=>({
          ...previosPost,
            [name]: value
        }));
    };
    return (
        <div className="centerBlock">
            <form onSubmit={formSubmit} className="post">
                <h1>Редактирование поста</h1>
                <div>
                    <label>Заголовок:</label>
                    <input
                        type="text"
                        name="title"
                        value={post.title}
                        onChange={inputChange}
                        required
                    />
                </div>
                <div>
                    <label>Описание:</label>
                    <textarea
                        name="description"
                        value={post.description}
                        onChange={inputChange}
                        required
                    />
                </div>
                <div>
                    <label>Ссылка на изображение:</label>
                    <input
                        type="text"
                        name="img"
                        value={post.img}
                        onChange={inputChange}
                        required
                    />
                    {errors===""? null:<p className="error">{errors}</p>}
                </div>
                <div>
                    <label>Имя автора:</label>
                    <input
                        type="text"
                        name="nameAuthor"
                        value={post.nameAuthor}
                        onChange={inputChange}
                        required
                    />
                </div>
                <button type="submit">Сохранить изменения</button>
            </form>
        </div>
    );
};

export default Editor;