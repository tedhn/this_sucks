import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function List() {
	return(
		<div className="list">
		<div>To Do List</div>
		
		<div id="todolist">hihihi</div>
	

		<div className="inputUI">
		<Input/>
		<Enter/>

		<item/>
		</div>

		</div>
	);
}

const Input =()=>{
	return(
		<span className="inputbox"><input id="input" type="text" /></span>
	);
}

const Enter =()=>{
	return(
		<span className="enterbutton"><button onClick={add}>Enter</button></span>
	);
}

function add(){
	var saved = document.getElementById("input").value;
	
	document.getElementById("input").innerText = saved;

}

const item =()=> {
	return(
		<div>hihihi</div>
	);
}


ReactDOM.render(<List/> , document.querySelector("#root"));