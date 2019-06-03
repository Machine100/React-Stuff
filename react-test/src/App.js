import React from 'react';
//import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="classname">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>TextFromShoppingListComponent</li>
        </ul>
      </div>
    );
  }
}

export default App;
