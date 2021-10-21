import React from 'react'
import '../02-useEfffect/effects.css'

export const FocusScreen = () => {

    const handleClick = () =>{
        document.querySelector('input').select();
    }



    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input
                className='form-control'
                placeholder='username' 
            />
            {/* mt-2 establishes a margin to separate the input from the button */}
            <button className='btn btn-outline-primary mt-2'
            onClick={handleClick}
            >
                Focus
            </button>
        </div>
    )
}
