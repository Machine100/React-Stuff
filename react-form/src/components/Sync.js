import React, {Component} from 'react';
import firebase from 'firebase'

console.log (firebase)

class Sync extends Component {

//  function databaselistener (){
//  	var x = db.collection('cities').doc('sf')
// 	  .onSnapshot(function(doc{..}))
//  }


  render (){
  	return (<h1>Make a Sync box</h1>)
  }
}

export default Sync;



// make sure auth has transfered to this component
// instantiate db. from firestore

// put laptop and office on same account
// create a database for the item that will change
// create listener using onSnapshot. display the item

// create state for the readout
// create listener for state
// display the readout

// merge state to onSnapshot listener