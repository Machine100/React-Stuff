import React from 'react';
import styled from 'styled-components';
import './App.css';
import BodyComponent from './components/BodyComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

class App extends React.Component {

  render() {
    
    return (
      <div>
        
            <div className="headerwrapper"> <HeaderComponent/> </div>	
          	<div className="bodywrapper"> <BodyComponent/> </div>
          	<div className="footerwrapper"> <FooterComponent/> </div>
      	  
      </div>
    );
  }
}

export default App;
