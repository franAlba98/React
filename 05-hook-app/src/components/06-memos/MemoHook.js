import React, { useMemo, useState } from 'react'
import { heavyProcess } from '../../helpers/heavyProcess';
import { useCounter } from '../../hooks/useCounter'
import '../02-useEfffect/effects.css'

export const MemoHook = () => {

    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);

    
    /* If I don't use the useMemo for the heavyProcess the heavyProcess will run every time I make some change in the component.... but I want it to change only when 
    the counter changes, the useMemo allows me to tell the helper heavyProcess to change only when the counter does (similar to useEffect but the use memos is only to add a "memory" 
    (in this case "counter") for a specific function )*/
    const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

    return (
        <div>
            <h1> Memo Hook</h1>
            <h3>Counter: <small>{counter}</small> </h3>
            <hr />

            <p>{memoHeavyProcess}</p>

            <button
                className='btn btn-primary'
                onClick={increment}
            >
                +1
            </button>

            <button
                className='btn btn-outline-primary ml-3'
                onClick={() => {
                    setShow(!show)
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
