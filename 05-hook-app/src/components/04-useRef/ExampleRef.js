import React, { useState } from 'react'
import {MultipleCustomHooks} from '../03-examples/MultipleCustomHooks'

import '../02-useEfffect/effects.css'

export const ExampleRef = () => {

    const [show, setShow] = useState(false);

    

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            {show && <MultipleCustomHooks />}

            <button 
            className='btn btn-warning mt-3'
            onClick={()=>{
                setShow(!show);
            }}
            > Show/Hide </button>
        </div>
    )
}
