import React from 'react';


class ChildComponent extends React.Component {
  render() {
    return (
      <div className="classname">
        
        <h1>It is easy to call a component. just use it like a tag.</h1>
        <h1>Class names are CapitalCamelCase.</h1>
        <h1>Print a prop: {this.props.name}</h1> 
      </div>
    );
  }
}

export default ChildComponent;