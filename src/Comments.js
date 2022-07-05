import React from 'react';
import { useState, useEffect, useRef } from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment.js';

function Comments() {
	const [comments, setComments] = useState([]);
	const[commenting, setCommenting] = useState(false);

	return (
		<div>
			<CommentForm />
			<div>
				{comments.map(comment => (
					<Comment />
				))}
			</div>
		</div>
	);
}

export default Comments;
