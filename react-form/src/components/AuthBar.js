import React from 'react';


import styled from 'styled-components'

const Button = styled.button`
	background-color: blue;
	font-size: 30px;
	padding: 1rem;
	margin: 1rem;
`


function AuthBar() {
  return (
    <div id="stripobuttons">

    	
 		<Button> Login </Button>

    </div>
  );
}

export default AuthBar;
