import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value); //useState return an array []
    console.log(counter);

    //handleAdd
    const handleAdd = () => {
        //when using setCounter react knows that counter changed and that it needs to reload the renderization of the component

        setCounter(counter + 1);
        //setCounter((c) => c + 1);
    }

    const handleSubstract = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(value);
    }


    return (
        //I can not use handleAdd() in line 17 because that would run the function in that moment, the thing that I need there is a reference to a function and that's why I use handleAdd without the ()
        <Fragment>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>RESET</button>
            <button onClick={handleSubstract}>-1</button>
        </Fragment>

    );

}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;