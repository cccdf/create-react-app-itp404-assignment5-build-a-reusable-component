import React from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
            <div className="SearchForm">
                <input>
                </input>
                <button>Search!</button>
            </div>
        );
    }
}