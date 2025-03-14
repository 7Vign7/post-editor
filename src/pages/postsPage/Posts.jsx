import React from 'react';

const Posts = () => {
    console.log(JSON.parse( localStorage.getItem('posts')));
    return (
        <div>

        </div>
    );
};

export default Posts;