import React from 'react';
import styled from 'styled-components';


class HeaderComponent extends React.Component {
  render() {
    return (
      <div>
        <div>  
          <button className="button1"> headerarea1 </button>
          <button className="button1"> headerarea2 </button>
          <button className="button1"> headerarea3 </button>
        </div> 
      </div>
    );
  }
}

export default HeaderComponent;