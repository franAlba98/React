import { useState } from "react"

export const useCounter = (initialState = 1) => {
    const [counter, setCounter] = useState(initialState);

    const increment = () => {
        setCounter(counter + 1);
        console.log('CONTADOR',counter);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(initialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}
