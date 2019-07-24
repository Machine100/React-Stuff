import React, {Component} from 'react';
import styled from 'styled-components'
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAt_hKp0C_7aBfpMhlkPwb3PRwWVW75Z9U",
    authDomain: "syncbox-7cc4f.firebaseapp.com",
    databaseURL: "https://syncbox-7cc4f.firebaseio.com",
    projectId: "syncbox-7cc4f",
    storageBucket: "syncbox-7cc4f.appspot.com",
    messagingSenderId: "623156720387",
    appId: "1:623156720387:web:215b01ce54469582"
};

firebase.initializeApp(firebaseConfig);
//console.log (firebase)
//

const Button = styled.button`
	background-color: paleblue;
	font-size: 30px;
	padding: 1rem;
	margin: 1rem;
`

firebase.firestore().collection('users2').onSnapshot(snap=>{
	console.log(snap)
	console.log(snap.docChanges())
	let changes = snap.docChanges()
	changes.forEach( change => {
		console.log( change.doc.data() )
       })
})

class AuthBar extends Component{
  
  state={username: '',
         password: '',
         numberondisplay: 0}

  incrementCount = (e) => {this.setState({ numberondisplay: this.state.numberondisplay + 1 })}  
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

  addItem = (e) => {
  	console.log(e)
  	firebase.firestore().collection("users2").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div id="stripobuttons">
    	
    	  Username:
    	  <input type='text' value={this.state.username} onChange={this.updateUsername} />
    	  Password:
    	  <input type='text' value={this.state.password} onChange={this.updatePassword} />        
    	  <Button onClick={this.logUserIn}> Login </Button>
    	  <Button onClick={this.addItem}> addItem </Button>
	      

	      <h1> {this.state.numberondisplay} </h1>
	  </div>
    )
  };
}

export default AuthBar;
