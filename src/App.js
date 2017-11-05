import React, { Component } from 'react';
import './css/bootstrap.css';

import Loginscreen from './Loginscreen'
class App extends Component {
	constructor(props){
		super(props);
		this.state={
		  loginPage:[],
		  uploadScreen:[]
		}
	  }
	  componentWillMount(){
		var loginPage =[];
		loginPage.push(<Loginscreen parentContext={this}/>);
		this.setState({
					  loginPage:loginPage
						})
	  }
	  render() {
		return (
		  <div className="container">
		  <br />
			{this.state.loginPage}
		  </div>
		);
	  }
}

export default App;
