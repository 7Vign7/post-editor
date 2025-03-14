import {useEffect} from 'react'
import axios from 'axios'
import "./style.css"
import {Route, Routes} from "react-router-dom";
import Posts from "./pages/postsPage/Posts.jsx";
const App = () => {
    // проверяем есть ли в локалсторедж посты,если нет, то делаем запрос и добавляем их
    useEffect(() => {
        if (localStorage.getItem('posts')){
        (async function listPost(){
                try{
                    const response = await axios.get('https://67d43b2ad2c7857431ecf0bc.mockapi.io/api/posts/posts')
                    localStorage.setItem('posts', JSON.stringify(response.data));
                }
                catch(error){
                    console.log(error)
                }
           })()
        }
    },[]);

    return (
        <div>
            <Routes>
                <Route path="/" element={<Posts/>}/>
            </Routes>
        </div>
    );
};

export default App;