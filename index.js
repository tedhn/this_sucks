import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Post(){

	return(
		<div className="post">
		
			<Profile/>

			<div className = "content">
				<Text/>
			</div>
			

			<div>
				<Likes/>
				<Comments/>
				<Share/>
			</div>
			
		</div>	
	);
}

function Profile() {

	return(
		<div className="profile">
		<img
			src="https://www.gravatar.com/avatar/nothing"
			className="pp"
			alt="pp"
		/>

		<div>
			<Name/>
			<Timestamp/>
		</div>

		</div>
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

const Likes = () =>{
	return(
		<button><i class="fa fa-thumbs-o-up"/></button>
	);
}

const Comments = () => {
	return(
		<button><i class="fa fa-comment-o"></i></button>
	);
}

const Share = () => {
	return(
		<button><i class="fa fa-share"></i></button>
	);
}

function Timestamp() {
	return(
		<div className="timestamp">
			time
		</div>
	);
}

ReactDOM.render( <Post/> , document.querySelector("#root"));