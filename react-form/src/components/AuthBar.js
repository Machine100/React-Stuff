import React, {Component} from 'react';
import styled from 'styled-components'
import firebase from 'firebase'

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    apiKey: "AIzaSyCBse51TtYhr0A19r9aIQZhjRG19HupQBM",
    authDomain: "test-fd83f.firebaseapp.com",
    databaseURL: "https://test-fd83f.firebaseio.com",
    projectId: "test-fd83f",
    storageBucket: "",
    messagingSenderId: "603068759345",
    appId: "1:603068759345:web:0fdcd0d9b54307a2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log (firebase)


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

  logUserIn = (e) => {
	console.log(this.state.username,this.state.password)
  console.log(firebase.auth)
  console.log(firebase.auth().signInWithEmailAndPassword)
	const promise = firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password).then(cred => {
		console.log(cred);
		var userInfo = cred.user;
		console.log(userInfo);
		var user = firebase.auth().currentUser;
	})
	promise.catch(e => console.log(e.message));
 }



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
