import React from 'react';
import SearchForm from './SearchForm'
import PropTypes from 'prop-types';


export default class MenuNav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            navElements: props.navElements,
            navElementsLinks: props.navElementLinks,

        };
    }





    render(){
        var linksIndex = 0;

        return (
            <nav className="MenuNav">
                <div>
                    <ul>
                        {this.state.navElements.map((element) => {
                            return (

                                <li>
                                    <a href={this.state.navElementsLinks[linksIndex++]}>{element}</a>
                                </li>
                                
                            )

                        })}
                    </ul>
                    <SearchForm></SearchForm>
                </div>
            </nav>
        );
    }
}

MenuNav.propTypes = {
    navElements: PropTypes.array.isRequired,
    navElementLinks: PropTypes.array.isRequired
  };