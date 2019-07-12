import React, {Component} from 'react';
import Item from './Item'


class Todos extends Component {

  render () {
    console.log (this.props.data)
    console.log (this.props.data[0])



  return this.props.data.map((i)=>( <h1> {i.title} </h1>)) 
  }
}

export default Todos;
