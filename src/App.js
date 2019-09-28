import React from 'react';
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
        <p>
          Component: Navigation Menu
        </p>
        <MenuNav 
          navElements={this.state.navElements}
          navElementLinks={this.state.navElementLinks}>

        </MenuNav>
        <br>
        </br>
        <p>How to use it:</p>
        <p>First import MenuNav.js file. Then type in the elements name and elements link in App constructor state. 
          These two arrays should correspond one-to-one. Then set the component props. 
          For example, navElements=this.state.navElements, navElementLinks=this.state.navElementLinks.
          As for the search form, I still need an API to finishi its function.</p>
        <br></br>
        <p>Motivation:</p>
        <p>Every webpage has a navigation menu. With this component developers only have to type in elements name and elements link to create a navigation menu.</p>
        <br />
        <p>About component and props name:</p>
        <p>This component is called MenuNav. It is an abbreviation of navigation menu.
          First prop is navElements. It is because a navigation menu must have some categories.
          The second prop is navElementsLinks which contains each elements' link.
        </p>
      </div>
    );
  }

}
