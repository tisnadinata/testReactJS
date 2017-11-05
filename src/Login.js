import React, { Component } from 'react';
import HomeScreen from './HomeScreen';

class Login extends Component {
	constructor(props){
		super(props);
		this.state={
			email:'example@email.com',
			password:'yourpassword'
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({[event.target.id]: event.target.value});
	}
	handleSubmit(event) {
		if(this.state.email === "tisnadinata@gmail.com" && this.state.password === "tisnadinata"){
			alert("Email & Password is correct!");
		}else{
			alert("Email & Password does not match!");
		}
		event.preventDefault();
	}
  render() {
    return (
		<form onSubmit={this.handleSubmit}>
		  <div className="form-group">
			<label >Email address</label>
			<input type="email" className="form-control form-control-sm" id="email" placeholder="Enter email" onChange={this.handleChange} required/>
		  </div>
		  <div className="form-group">
			<label >Password</label>
			<input type="password" className="form-control form-control-sm" id="password" placeholder="Password" onChange={this.handleChange} required/>
		  </div>
		  <div className="form-check">
			<label className="form-check-label">
			  <input type="checkbox" className="form-check-input"/>
			  Check me out
			</label>
		  </div>
		  <button type="Submit" className="btn btn-primary col-md-12 pull-right">Login</button>
		</form>
    );
  }
}

export default Login;
