import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 1.5em;
  background-color: orange;
  color: green;
`



class FooterComponent extends React.Component {

 

  render() {
    return (
      <div>
        
        <div>
          <Button > footerareaaaaaaaa1 </Button>
          <Button > footerarea2 </Button>
          <Button > footerarea3 </Button>
        </div> 

      </div>
    );
  }
}

export default FooterComponent;