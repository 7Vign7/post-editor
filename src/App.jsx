import {useEffect, useState} from 'react'
import axios from 'axios'
import "./style.css"
import {Route, Routes, Link, useMatch,useLocation} from "react-router-dom";
import Posts from "./pages/postsPage/Posts.jsx";
import Post from "./pages/postPage/Post.jsx"
import Editor from "./pages/postEditor/Editor.jsx";
const App = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const localStoragePost = localStorage.getItem('posts')
        if (!localStoragePost){
            (async function fetchPosts(){
                try {
                    const response = await axios.get('https://67d43b2ad2c7857431ecf0bc.mockapi.io/api/posts/posts');
                    localStorage.setItem('posts', JSON.stringify(response.data));
                    setPosts(response.data);
                } catch (error) {
                    console.error('Ошибка при загрузке данных:', error);
                }
            })()
        }else{
            setPosts(JSON.parse(localStoragePost));
        }
        setLoading(false)
    }, []);

    if(loading){
        return <div>Loading...</div>
    }

    return (
        <div>
            <nav>
                <Link to={`/`}>Главная</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Posts posts={posts}/>}/>
                <Route path="/post/:id" element={<Post posts={posts}/>} />
                <Route path="/post/editor/:id" element={<Editor posts={posts} editPost={setPosts}/>} />
            </Routes>
        </div>
    );
};

export default App;