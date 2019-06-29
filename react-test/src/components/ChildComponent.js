import React from 'react';
import styled from 'styled-components';


class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        
        {/* This is the grid container. All direct children become grid items. */}
        <div className="buttongrid">
          <button className="button1"> button1 </button>
          <button className="button1"> button2 </button>
          <button className="button1"> button3 </button>
          <button className="button1"> button4 </button>
          <button className="button1"> button5 </button>
          <button className="button1"> button6 </button>
          <button className="button1"> button7 </button>
          <button className="button1"> button8 </button>
          <button className="button1"> button9 </button>
        </div> 
      </div>
    );
  }
}

export default ChildComponent;