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
      </div>
    );
  }
}

export default App;
