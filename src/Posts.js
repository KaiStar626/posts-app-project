import React from 'react';
import { useState } from 'react';
import PostForm from './PostForm';
import Post from './Post';

function Posts() {
	const [posts, setPosts] = useState([]);

	return (
		<div>
			<PostForm />
			<div>
				{posts.map(post => (
					<Post />
				))}
			</div>
		</div>
	);
}

export default Posts;
