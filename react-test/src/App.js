import React from 'react';
import './App.css';
import ChildComponent from './Apptest'


class App extends React.Component {
  
  render() {
    
    return (
      <div>
        
        <div className="buttongrid">
          <button className="button1"> button1 </button>
          <button className="button1"> button2 </button>
          <button className="button1"> button3 </button>
          <button className="button1"> button4 </button>
          <button className="button1"> button5 </button>
          <button className="button1"> button6 </button>
          <button className="button1"> button7 </button>
          <button className="button1"> button8 </button>
          <button className="button1"> button9 </button>
        </div>

        <h1> put these buttons in css-grid </h1>

        <ChildComponent />
<<<<<<< HEAD
        <button className="button1"> buttontext </button>
      
=======
>>>>>>> 06b89598f062eb6754212b7bfb1fd1b0fe406e64
      </div>
    );
  }
}

export default App;
