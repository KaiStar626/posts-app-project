import React from 'react';
import Comments from './Comments';

function Post() {
	fetch("/api/Comment", {method: "POST", body: JSON.stringify(data)})
	return (
		<div>
			<h4></h4>
			<h3></h3>
			<p></p>
			<Comments />
		</div>
	);
}

export default Post;
