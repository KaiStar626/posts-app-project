import Comments from './Comments';
import CommentForm from './CommentForm';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function Comment({name, comment, title}) 
{
	const[edit, setEdit]=useState(false);
	const[nameNow, setNameNow]=useState(username);
	const[textNow, setTextNow]=useState(comment);
	const[titleNow, setTitleNow]=useState(title);

	const editComment=(name, comment, title) =>
	{
		setNameNow(username);
		setCommentNow(comment);
		setTitleNow(title);
		toggle();
	}

	const toggle=() => setEdit(!editing);


	return (
		<div className='Comment'>
			{ editing ? 
			(
				<CommentForm 
					initName={nameNow}
					initComment={textNow}
					initTitle={titleNow}
					onSubmit={editComment}
				/> 
			):(
				<>
				<h5>{nameNow}</h5>
				<p>{textNow}</p>
				<button 
					 onClick={toggle} >
					<span>Edit</span>
					<FontAwesomeIcon icon="fa-solid fa-satellite" border />
				</button>
				{/*<Comments />*/}
				</>
			)}
		</div>
	);
} 

export default Comment;
