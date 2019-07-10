import React, {Component} from 'react';
import AuthBar from './components/AuthBar'
import Todos from './components/Todos'

class App extends Component {
  
  state = {
  	thingstodo: [
  	  {feedcat: {id:1, completed:true}},
  	  {dishes: {id:2, completed:false}},
  	  {benice: {id:3, completed:false}}
    ]
  }

  render () {
  	console.log (this.state.thingstodo)
  	return (
      <div>
 		<AuthBar />
 		<Todos todos={this.state.todos}/>
      </div>
    );
  }
}






export default App;
