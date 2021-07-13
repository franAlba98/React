import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

//functional components

const FirstApp = ({greeting /* = 'Default value' */, subtitle}) => {


    //const greeting = 'hello world';
    console.log(greeting);
    return (
        <Fragment>
            <h1> {greeting} </h1>
            <p>My first text, hello hello world</p>
            <p> {subtitle} </p>
        </Fragment>

    );

}


//Defines the prop types (here greeting must be a string and be provided, if not, the Console will give a Warning stating so)
FirstApp.propTypes = {
    greeting: PropTypes.string.isRequired
}

//defaultProps establishes the props' default values
FirstApp.defaultProps = {
    subtitle: 'My subtitle default value'
}

export default FirstApp;