import React from 'react';
import {useState, useEffect} from 'react';


function PostForm() {
	return (
		<form>
			<input name='name' type='text' placeholder='Name' />
			<input name='title' type='text' placeholder='Title' />
			<textarea name='text' cols='30' rows='10' placeholder='Text'></textarea>
			<button type='button'>Submit</button>
		</form>
	);
}

export default PostForm;
