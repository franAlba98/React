import React from 'react'
import { useCounter } from '../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(100);

    return (
        <>
            <h1>Counter with hook: {state} </h1>
            <hr />
            {/* IF INCREMEN AND DECREMENT HAVE ARGUMENTS like 'step' THEN I MUST CALL THEM IN BUTTON AS AN ARROW FUNCTION */}
            <button className='btn' onClick={()=>increment(4)}>+1</button>
            <button className='btn' onClick={reset}>RESET</button>
            <button className='btn' onClick={()=>decrement(4)}>-1</button>
        </>
    )
}
