import React, {Component} from 'react';
import styled from 'styled-components'



const Button = styled.button`
	background-color: paleblue;
	font-size: 30px;
	padding: 1rem;
	margin: 1rem;
`



class AuthBar extends Component{
  
  state={username: '',
         password: '',
         numberondisplay: 0}

  incrementCount = (e) => {
  	console.log(this)
  	this.setState({ numberondisplay: this.state.numberondisplay + 1 })
  }
  
  updateUsername = (e) => {this.setState( {username: e.target.value} )}
  updatePassword = (e) => {this.setState( {password: e.target.value} )}

//  logUserIn = (e) => {
//	console.log(this.username,this.password)
//	const promise = auth.signInWithEmailAndPassword(this.username, this.password).then(cred => {
//		console.log(cred);
//		userInfo = cred.user;
//		console.log(userInfo);
//		user = firebase.auth().currentUser;
//	})
//	promise.catch(e => console.log(e.message));
//  }



  render() {
    return (
      <div id="stripobuttons">
    	
    	  Username:
    	  <input type='text' value={this.state.username} onChange={this.updateUsername} />
    	  Password:
    	  <input type='text' value={this.state.password} onChange={this.updatePassword} />        
    	  <Button onClick={this.logUserIn}> Login </Button>
	      

	      <h1> {this.state.numberondisplay} </h1>
	  </div>
    )
  };
}

export default AuthBar;
