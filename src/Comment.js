import Comments from './Comments';
import CommentForm from './CommentForm';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const toggleMode=() => setEdit(!editing);

const editComment=(name, text) =>
{
	setNameNow(name);
	setTextNow(text);
	toggleMode();
	
}
function Comment() {
	return (
		<div className='comment'>
			{ editing ? 
			(
				<CommentForm 
					initName={nameNow}
					initComment={textNow}
					onSubmit={editComment}
				/> 
			):(

			<h4>{nameNow}</h4>
			<p>{textNow}</p>
			<Comments />
			)}
		</div>
	);
} 

export default Comment;
