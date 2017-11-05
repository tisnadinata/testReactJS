import React, { Component } from 'react';
import './css/bootstrap.css';

import Login from './Login';
import Register from './Register';
class Loginscreen extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      loginscreen:[],
      logintitle:'',
      loginmessage:'',
      isLogin:true
    }
  }
  componentWillMount(){
    var loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
    var logintitle = "Login With You Email";
    var loginmessage = "Don't Have Account? Register Here!";
    this.setState({
                  loginscreen:loginscreen,
                  logintitle:logintitle,
                  loginmessage:loginmessage
                    })
  }
  handleClick(event){
    // console.log("event",event);
    var logintitle;
    var loginmessage;
	var loginscreen=[];
    if(this.state.isLogin){
      loginscreen.push(<Register parentContext={this}/>);
      logintitle = "Register With You Email";
      loginmessage = "Already Have Account? Login Here!";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     logintitle:logintitle,
                     isLogin:false
                   })
    }else{
      loginscreen.push(<Login parentContext={this}/>);
	  logintitle = "Login With You Email";
      loginmessage = "Don't Have Account? Register Here!";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     logintitle:logintitle,
                     isLogin:true
                   })
    }
  }
  render() {
    return (
		<div className="row justify-content-md-center">
			<div className="col-md-4 card">
				<div className="card-header bg-primary text-uppercase">
					<center>
						<b>{this.state.logintitle}</b>
					</center>
				</div>
				<div className="card-body">
					{this.state.loginscreen}
				</div>
				<center><a style={{cursor: 'pointer'}} onClick={(event) => this.handleClick(event)}>{this.state.loginmessage}</a></center>
				<br/>
			</div>
		</div>
    );
  }
}

export default Loginscreen;
