import React from 'react';
import PropTypes from 'prop-types';


export default class MenuNav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            navElements: props.navElements,
            navElementsLinks: props.navElementLinks,
            hover: false,

        };
    }

    hoverOn = () => {
        this.setState({
            hover: true,
        })
    }

    hoverOff = () => {
        this.setState({
            hover: false,
        })
    }



    render(){
        var linksIndex = 0;

        return (
            <nav className="MenuNav">
                <div>
                    <ul>
                        {this.state.navElements.map((element) => {
                            return (

                                <li onMouseEnter={this.hoverOn} 
                                    onMouseLeave={this.hoverOff}
                                    >
                                    <a href={this.state.navElementsLinks[linksIndex++]}>{element}</a>
                                </li>
                                
                            )

                        })}
                    </ul>
                    <input></input>
                </div>
            </nav>
        );
    }
}

MenuNav.propTypes = {
    navElements: PropTypes.array.isRequired,
    navElementLinks: PropTypes.array.isRequired
  };