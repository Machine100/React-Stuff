import React from 'react';


class Apptest extends React.Component {
  render() {
    return (
      <div className="classname">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>TextFromApptestComponent</li>
        </ul>
      </div>
    );
  }
}

export default Apptest;