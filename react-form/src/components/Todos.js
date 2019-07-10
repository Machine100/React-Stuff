import React, {Component} from 'react';
import Item from './Item'


class Todos extends Component {

  render () {
    console.log (this.props.thingstodo)
    return this.props.thingstodo.map( (i) => ( 
    	<h3> {i.id} </h3>
    	) 

    )
  }
}

export default Todos;
