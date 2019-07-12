import React, {Component} from 'react';


import styled from 'styled-components'

const Button = styled.button`
	background-color: blue;
	font-size: 30px;
	padding: 1rem;
	margin: 1rem;
`


class AuthBar extends Component{
  
  state={username:'ss'}

  handleChange = (e) => {
  	console.log ('kdkdkddk')
  }

  render() {
    return (
      <div id="stripobuttons">
    	
    	  Username:
    	  <input type='text' value={this.state.username} onChange={this.handleChange} />
        
    	  
    	  <Button onClick={this.mashedMethod}> Login </Button>
	    
	  </div>
    )
  };
}

export default AuthBar;
