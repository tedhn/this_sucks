import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Post(){

	return(
		<div className="post">
			<div>
			<Profile/>
			<Name/>
				</div>		
			<div className = "content">
				<Text/>
			</div>
			
		</div>	
	);
}

function Profile() {

	return(
		<span>
		<img
			src="https://www.gravatar.com/avatar/nothing"
			className="pp"
			alt="pp"
		/>

		</span>
		
	);
}

function Text(){
	return(
		<div className="text">
			Text
		</div>

	);
}

function Name(){
	return(
		<span className="name">
			Profile Name
		</span>

	);
}

function Likes() {
	return(
		<button>Like</button>
	);
}

function Comments() {
	return(
		<button>Comment</button>
	);
}

function Share() {
	return(
		<button>Share</button>
	);
}



ReactDOM.render( <Post/> , document.querySelector("#root"));