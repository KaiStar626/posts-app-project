import {useForm} from "react-hook-form";
import React, {Fragment, useState, Component, forwardRef}from "react";

const CommentForm = forwardRef( 
	({ initName, initComment, initTitle, onSubmit}, ref) =>
	{
	
	const [isSending, setIsSending] = useState(false);
	const {register, errors, handleSubmit, reset} = useForm();

	const onSubmit = data => {
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
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input 
			name='name' 
			type='text' 
			placeholder='Name' 
			ref={register({required: true, maxLength: 80})}
			/>

			<input 
			name='title' 
			type='text' 
			placeholder='Title' 
			ref={register({required: false, maxLength: 80})}
			/>

			<textarea 
			name='comment' 
			cols='30' 
			rows='10' 
			placeholder='Comment'
			ref={register({required: true, maxLength: 500})}
			/>

			{errors.comment && (<span> You have to write a comment</span>)}
			

			<input
			type="submit"
			disabled={isSending}
			value={isSending ? "Posting Comment " : "Post"}
			/>
			{/*<button type='button'>Submit</button>*/}
		</form>
	);
}
 
export default CommentForm;
