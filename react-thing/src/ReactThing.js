import React, {Component} from 'react';
{//import test from './test';
}
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shoppinglist">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}




export default shoppinglist;


//inside the render is a return 