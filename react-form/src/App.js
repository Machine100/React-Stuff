import React, {Component} from 'react';
import AuthBar from './components/AuthBar'
import Sync from './components/Sync'
import firebase from 'firebase'

class App extends Component {
  
  state = {  }

  render () {
  	console.log (this.state.thingstodo)
  	return (
      <div>
        <AuthBar />
        <Sync />
      </div>
    );
  }
}






export default App;
