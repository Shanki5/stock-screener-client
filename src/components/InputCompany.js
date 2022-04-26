import React, { Component } from "react";
import axios from "axios";
class InputCompany extends Component {
	
	state = {
		companyName: ''
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e =>{
		console.log(e);
		console.log(this.state)
		axios
			.post('http://localhost:8082/api/stocks/' + this.state.companyName)
			.then(res => {
				console.log(res)
			})
			.catch(err => {
				console.log("error in stock-overview");
				console.log(err)
			})
		e.preventDefault();
	}
	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input 
					type="text" 
					className='form-control' 
					name='companyName'
                    value={this.state.companyName}
                    onChange={this.onChange} 
					placeholder="Add Company to database" />
				<input type="submit" className="btn"/>
			</form>
		)
	}
}

export default InputCompany
