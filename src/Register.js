import React, { Component } from 'react';

class Register extends Component {
	constructor(props){
	  super(props);
	  this.state={
		fullname:'fullname',
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
		alert('A data was submitted: ' + this.state.fullname +  ' : '  + this.state.email +  ' : ' + this.state.password);
		event.preventDefault();
	}
  render() {
    return (

		<form onSubmit={this.handleSubmit}>
		  <div className="form-group">
			<label >Full Name</label>
			<input type="text" className="form-control form-control-sm" id="fullname" placeholder="Enter your fullname" onChange={this.handleChange} />
		  </div>
		  <div className="form-group">
			<label >Email address</label>
			<input type="email" className="form-control form-control-sm" id="email" placeholder="Enter email" onChange={this.handleChange} />
		  </div>
		  <div className="form-group">
			<label >Password</label>
			<input type="password" className="form-control form-control-sm" id="password" placeholder="Password" onChange={this.handleChange} />
		  </div>
		  <div className="form-check">
			<label className="form-check-label">
			  <input type="checkbox" className="form-check-input"/>
			  I agree to terms
			</label>
		  </div>
		  <button type="Submit" className="btn btn-info col-md-12  pull-right" >Register</button>
		</form>
    );
  }
}

export default Register;
