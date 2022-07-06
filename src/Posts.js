import React from 'react';
import { useState } from 'react';
import PostForm from './PostForm';
import Post from './Post';

function Posts() {
	const [posts, setPosts] = useState([]);

	const addNewPost=(username,comment, title) => setPosts([...posts, {username,comment, title}])
	
	return (
		<div>
			<PostForm  onSubmit={addNewPost}/>
			<div>
				{posts.map(post => (
					<Post {...post}/>
				))}
			</div>
		</div>
	);
}

export default Posts;
