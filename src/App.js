import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuNav from './MenuNav';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        navElements: ["Google", "Amazon", "Ebay", "Alibaba", "About us"],
        navElementLinks: ["https://www.google.com/", "https://www.amazon.com/", "https://www.ebay.com/", "https://www.alibaba.com/"],
      };
      
     
    }

  
  render(){
    return(
      <div>
        <MenuNav 
          navElements={this.state.navElements}
          navElementLinks={this.state.navElementLinks}>

        </MenuNav>
      </div>
    );
  }

}
