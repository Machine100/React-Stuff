import React, {Component} from 'react';
import AuthBar from './components/AuthBar'
import Todos from './components/Todos'
import firebase from 'firebase'

class App extends Component {
  
  state = {  }

  render () {
  	console.log (this.state.thingstodo)
  	return (
      <div>
        <AuthBar />
      </div>
    );
  }
}






export default App;
