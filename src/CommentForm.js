import {useForm} from "react-hook-form";
import React, {Fragment, useState, Component, forwardRef, useEffect}from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const CommentForm = forwardRef( 
	({ initName, initComment, initTitle, onSubmit}) =>
	{
		const[username, setName] = useState(initName)
		const[comment, setComment] = useState(initComment)
		const[title, setTitle] = useState(initTitle)
		const[isValidInput, setValidInput] = useState(initName && initComment && initTitle)

	useEffect(() => {
		const validInput = username.length && text.length;
		if (isValidInput!==validInput) setValidInput(isValidInput);
		}, [username, comment, title]);

		{/*function postSubmit(e) {
			SubmitEvent.textContent = 'time stamp: ${e.timeStamp}';
			e.preventDefault();
		}
		const post = document.getElementById('submit');*/}


		const editName=e=> setName(e.target.value);
		const editComment=e=> setComment(e.target.value);
		const editTitle=e=> setTitle(e.target.value);

	{/*const [isSending, setIsSending] = useState(false);*/}
	const {register, errors, handleSubmit, reset} = useForm();

	{
		/*const onSubmit = data => {
		setIsSending(true);
		
		fetch("/api/Examplecomments", {
			method: "POST",
			body: JSON.stringify(data)
		}
		).then(r => {
			if (r.status === 200) {
				setIsSending(false);
			} 
		})
	     }
         */
    }

	const postSubmit = () => {
		onSubmit(username.replace(/\s/g, " ", "-"), comment, title);
		setName(" ");
		setComment(" ");
		setTitle(" ");
	}
	return (
		<form {/*onSubmit={handleSubmit(onSubmit)}*/} >
			<input 
			autoFocus
			name='name' 
			type='text' 
			placeholder='Name' 
			ref={register({required: true, maxLength: 80})}
			value={username}
			/>

			<input 
			name='title' 
			type='text' 
			placeholder='Title' 
			ref={register({required: false, maxLength: 80})}
			value={title}
			/>

			<textarea 
			name='comment' 
			cols='30' 
			rows='10' 
			placeholder='Comment'
			ref={register({required: true, maxLength: 500})}
			></textarea>

			{errors.comment && (<span> You have to write a comment</span>)}
			

			{/*<input
			type="submit"
			disabled={isSending}
			value={isSending ? "Posting Comment " : "Post"}
            />*/}

			<button 
				disabled={!isValidInput}  onClick={postSubmit} type='button'>
				<strong>Submit</strong>
				<FontAwesomeIcon icon="fa-solid fa-rocket" />
			</button>

		</form>
		);
	}
);
 
CommentForm.defaultProps = {
	initName= " ",
	initTitle= " ",
	initComment= " ",
};

export default CommentForm;
