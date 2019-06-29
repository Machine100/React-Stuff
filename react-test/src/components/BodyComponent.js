import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 1.5em;
  background-color: black;
  color: red;
`

class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="buttongrid">
          <Button> button1 </Button>
          <Button> button2 </Button>
          <Button> button3 </Button>
          <Button> button4 </Button>
          <Button> button5 </Button>
          <Button> button6 </Button>
          <Button> button7 </Button>
          <Button> button8 </Button>
          <Button> button9 </Button>
        </div> 
      </div>
    );
  }
}

export default ChildComponent;