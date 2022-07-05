import React from 'react';
import Posts from './Posts';
import Sidebar from './Sidebar';

function App() {
	return (
		<div className='App'>
			<h1>My Post App</h1>
			{/* Sidebar */}
			<Sidebar />

			{/* Feed */}


			{/* Widgets */}
			<Posts />
		</div>
	);
}

export default App;
