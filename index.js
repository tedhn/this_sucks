import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class ToDo extends React.Component{
	
	state = {
			editing  : false
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
				<textarea type="text" value={this.props.children}></textarea>
				<button onClick={()=> this.setState({editing : false})}>Save</button>
			</div>
		);
	}

	normalmode =()=>{
		return(
			<div>
				<span>{this.props.children}</span>
				<button onClick={()=> this.setState({editing : true})}>Edit</button>
				<button>Remove</button>
			</div>
		);
	}
}

ReactDOM.render( <ToDo>HELLO WORLD</ToDo> , document.querySelector("#root"));