import React from 'react';
//import './App.css';
import ChildComponent from './Apptest'

class App extends React.Component {
  
  render() {
    
    return (
      <div className="classname">

        <ul>
          <li>This is App.js calling several components</li>
          <li>Being able to do this was one of my goals.</li>
          <li>arrange components and make them look good.</li>
          <li>Or maybe I'll do a login form for Okta or Cognito.</li>
          <ChildComponent />
            
        </ul>
      </div>
    );
  }
}

export default App;
