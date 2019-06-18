import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 1.5em;
  background-color: orange;
  color: green;
`

class HeaderComponent extends React.Component {
  render() {
    return (
      <div>
        <div>  
          <Button> headerarea1 </Button>
          <Button> headerarea2 </Button>
          <Button> headerarea3 </Button>
        </div> 
      </div>
    );
  }
}

export default HeaderComponent;