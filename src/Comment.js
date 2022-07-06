import Comments from './Comments';
import CommentForm from './CommentForm';
import React, {useState} from 'react';



function Comment({username, comment, title}) 
{
	const[edit, setEdit]=useState(false);
	const[nameNow, setNameNow]=useState(username);
	const[commentNow, setCommentNow]=useState(comment);
	const[titleNow, setTitleNow]=useState(title);

	const editComment=(username, comment, title) =>
	{
		setNameNow(username);
		setCommentNow(comment);
		setTitleNow(title);
		toggle();
	}

	const toggle=() => setEdit(!edit);


	return (
		<div className='Comment'>
			{ edit ? 
			(
				<CommentForm 
					initName={nameNow}
					initComment={commentNow}
					initTitle={titleNow}
					onSubmit={editComment}
				/> 
			):(
				<>
				<h5>{nameNow}</h5>
				<p>{commentNow}</p>
				<button 
					 onClick={toggle} >
					<span>Edit</span>
				</button>
				{/*<Comments />*/}
				</>
			)}
		</div>
	);
} 

export default Comment;
