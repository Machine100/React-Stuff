import React from 'react';
import styled from 'styled-components';

const FooterButton = styled.button`
  font-size: 1.5em;
  background-color: orange;
  color: green;
  width: 200px;
`



class FooterComponent extends React.Component {

 

  render() {
    return (
      <div>
        
        <div className="footergrid">
          <FooterButton > footerarea1 </FooterButton>
          <FooterButton > footerarea2 </FooterButton>
          <FooterButton > footerarea3 </FooterButton>
        </div> 

      </div>
    );
  }
}

export default FooterComponent;