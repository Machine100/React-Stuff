import React from 'react';
import './App.css';
import BodyComponent from './components/ChildComponent'
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
