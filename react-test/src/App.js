import React from 'react';
import './App.css';
import ChildComponent from './Apptest'


class App extends React.Component {
  
  render() {
    
    return (
      <div>
        
        <ChildComponent />
        <button className="button1"> buttontext </button>
      </div>
    );
  }
}

export default App;
