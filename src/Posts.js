import React from 'react';
import { useState } from 'react';
import PostForm from './PostForm';
import Post from './Post';

function Posts() {
	const [posts, setPosts] = useState([]);

	const addNewPost=(username, title, comment) => setPosts([...posts, {username, title, comment}])
	
	return (
		<div>
			<PostForm  onSubmit={addNewPost}/>
			<div>
				{posts.map(post => (
					<Post />
				))}
			</div>
		</div>
	);
}

export default Posts;
