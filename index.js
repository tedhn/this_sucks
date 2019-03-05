import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class ToDo extends React.Component{
	
	state = {
		editing  : false,
	};	

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
				<input type="text" ref="newtext" deafultvalue={this.props.children}></input>
				<button onClick={this.saved}><i class="fa fa-check"></i></button>
			</div>
		);
	}

	normalmode =()=>{
		return(
			<div>				
				<span>{this.props.children}</span>
				<button onClick={()=> this.setState({editing : true})}><i class="fa fa-edit"></i></button>
				<button onClick={this.remove}><i class="fa fa-close"></i></button>
			</div>
		);
	}

	saved =()=>{
		this.setState({editing: false})
		this.props.UC(this.refs.newtext.value , this.props.index)
	}

	remove = () =>{
		this.props.RC(this.props.index)
	}
}

class Board extends React.Component{
	state={
		task : []
	}

	loop = (item , i)=>{
		return(<ToDo key={i} index={i} UC={this.updateTask} RC={this.removeTask}>
			{item}
		</ToDo>);
	}

	removeTask = (index) =>{
		
		var arr = this.state.task;
		
		arr.splice(index,1);
		
		this.setState({
			task: arr
		})
	}

	updateTask = (newtext , index) => {
		var arr = this.state.task;
		arr[index] = newtext;
		this.setState({
			task: arr
		})
	}

	addTask = () =>{
		var arr = this.state.task;
		arr.push("DF");

		this.setState({
			task : arr
		})
		
		
	}

	render(){
		return(
			<div className="list">

				<button onClick={this.addTask}><i className="fa fa-plus"></i></button>
				<div className="inputbox">{this.state.task.map(this.loop)}</div>
				
				
			</div>
		);
	}
}

ReactDOM.render( <Board/> , document.querySelector("#root"));