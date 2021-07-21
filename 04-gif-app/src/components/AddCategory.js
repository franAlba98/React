import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ anyNameICanUseTheNameOfTheUseState }) => {

    const [inputValue, setInputValue] = useState('Hello world');

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        //preventDefault() prevents the browser from refreshing each time something is submitted in the form
        e.preventDefault();

        if (inputValue.trim().length > 2) {

            //The thing here is that I call the prop anyNameICan... that I pass as an argument in the component (line 3). The problem is that I have no access to the array of cities in GifExpertApp
            //component, I could also pass the array as an argument but is not required because with referencing the setCategories using the anyNameICan with the callback "categories". This gives
            //me access to the information of the previous state.
            anyNameICanUseTheNameOfTheUseState(categories => [...categories, inputValue]);
            setInputValue('');

        }


    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )

}

AddCategory.propTypes = {
    anyNameICanUseTheNameOfTheUseState: PropTypes.func.isRequired
}
