import React, {useState} from 'react';
import Comments from './Comments';
import PostForm	from './PostForm';


function Post({username, comment, title}) {
	const [editing, setEditing]=useState(false);
	const [nameNow, setNameNow]=useState(username);
	const [titleNow, setTitleNow]=useState(username);
	const [commentNow, setCommentNow]=useState(username);
	
	const toggleEdits = () => setEditing(!editing);

	const editPost = (username, comment, title) =>
	{
		setNameNow(username);
		setCommentNow(comment);
		setTitleNow(title);
		toggleEdits();
	}


	return (
	<div className='post-format'>
		{ editing ? (
		  <PostForm 
		  initName= {nameNow}
		  initTitle= {titleNow}
		  initComment= {commentNow}
		  />

		):(
			<div className='post-subject-matter'>
				<h4>{nameNow}</h4>
				<h3>{titleNow}</h3>
				<p>{commentNow}</p>
				<button onClick={toggleEdits}>
					<span>Edit</span>
				</button>
				<Comments />
			</div>
		)}
	</div>
		
	);
}

export default Post;
