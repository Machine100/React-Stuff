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
        
        <div className="buttongrid">
          <button className="button1" button1 />
          <button className="button1" button2 />
          <button className="button1"> button3 </button>
          <button className="button1"> button4 </button>
          <button className="button1"> button5 </button>
          <button className="button1"> button6 </button>
          <button className="button1"> button7 </button>
          <button className="button1"> button8 </button>
          <button className="button1"> button9 </button>
        </div>

        <h1> put these buttons in css-grid </h1>

        <ChildComponent />

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
