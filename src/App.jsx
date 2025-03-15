import {useEffect, useState} from 'react'
import axios from 'axios'
import "./style.css"
import {Route, Routes, Link, useMatch,useLocation} from "react-router-dom";
import Posts from "./pages/postsPage/Posts.jsx";
import Post from "./pages/postPage/Post.jsx"
import Editor from "./pages/postEditor/Editor.jsx";
const App = () => {
    // проверяем есть ли в локалсторедж посты, если нет, то делаем запрос и добавляем их
    useEffect(() => {
        if (!localStorage.getItem('posts')){
            (async function fetchPosts(){
                try {
                    const response = await axios.get('https://67d43b2ad2c7857431ecf0bc.mockapi.io/api/posts/posts');
                    localStorage.setItem('posts', JSON.stringify(response.data));
                    location.reload();
                } catch (error) {
                    console.error('Ошибка при загрузке данных:', error);
                }
            })()
        }
    }, []);
    function BackToPost (){
        const match = useMatch('/post/editor/:id')
        if(match){
            const url = useLocation().pathname;
            const id = url.split("/").reverse()[0]
            return(
                <Link to={`/post/${id}`}>Назад к посту</Link>
            )
        }
        else{
            return null
        }
    }
    return (
        <div>
            <nav>
                <Link to={`/`}>Главная</Link>
                <BackToPost/>
            </nav>
            <Routes>
                <Route path="/" element={<Posts/>}/>
                <Route path="/post/:id" element={<Post/>} />
                <Route path="/post/editor/:id" element={<Editor/>} />
            </Routes>
        </div>
    );
};

export default App;