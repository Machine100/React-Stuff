import React, {Component} from 'react';
import AuthBar from './components/AuthBar'
import Todos from './components/Todos'

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
