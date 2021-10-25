import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

import './layout.css'

export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = /* if the data exists (with the duble nagation !!) then return the first element in the data array */ !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize]= useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
        console.log(pTag.current.getBoundingClientRect());
    }, [quote]);

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />
            {/* the loading? works the same way as an ngif so I can show a block when a condition is met...... the : marks the else and it's a must. */}

            <div>
                <blockquote className="blockquote text-right">
                    <p 
                    className="mb-0"
                    ref={pTag}
                    >
                        {quote}
                        </p>
                </blockquote>

                <pre>
                    {/* this line here is to renderize the boxSize in html */}
                    {JSON.stringify(boxSize,null,3)}
                </pre>

                <button type="button" className="btn btn-primary mt-5" onClick={increment}>Next quote</button>
            </div>

        </div>

    )
}
