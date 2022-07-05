import React from 'react';
import { useState, useEffect, useRef } from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment.js';

function Comments({currentUserId}) {
	const [comments, setComments] = useState([]);
	const[commenting, setCommenting] = useState(false);

	return (
		<div className="comments">
			<h3 className="comments-title">Comments</h3>
			<div className='comments-container'>
					{/*<CommentForm />
					<div>
					{comments.map(comment => (
					<Comment />
					))}
					</div>*/}
			</div>
		</div>
	);
}

export default Comments;
