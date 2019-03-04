import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class ToDo extends React.Component{
	
	constructor(props){
		super(props)
		this.state = {
				editing  : false,
				value : this.props.children
		};
	}
	

	render(){

		if(this.state.editing){
			
			return this.editingmode();
		}
		else{
			
			return this.normalmode();
		}
	
	}

	editingmode =()=>{
		return(
			<div>
				{console.log(this.state.value)}
				<input type="text" ref="newtext" deafultvalue={this.props.children}></input>
				<button onClick={this.saved}>Save</button>
			</div>
		);
	}

	normalmode =()=>{
		return(
			<div>				
				{console.log(this.state.value)}
				<span>{this.state.value}</span>
				<button onClick={()=> this.setState({editing : true})}>Edit</button>
				<button onClick={this.remove}>Remove</button>
			</div>
		);
	}

	saved =()=>{
		this.setState({editing: false})
		this.props.UC(this.refs.newtext.value , this.props.index)
	}

	remove = () =>{
		console.log(this.props.index)
		this.props.RC(this.props.index)
	}
}

class Board extends React.Component{
	state={
		task : [
			"Hello",
			"Default Text",
			"World"
		]
	}

	loop = (item , i)=>{
		return(<ToDo key={i} index={i} UC={this.updateComment} RC={this.removeComment}>
			{item}
		</ToDo>);
	}

	removeComment = (index) =>{
		
		var arr = this.state.task;
		
		arr.splice(index,1);
		
		this.setState({
			task: arr
		})
	}

	updateComment = (newtext , index) => {
		var arr = this.state.task;
		arr[index] = newtext;
		this.setState({
			task: arr
		})
	}

	render(){
		return(
			<div>
				{this.state.task.map(this.loop)}
			</div>
		);
	}
}

ReactDOM.render( <Board/> , document.querySelector("#root"));