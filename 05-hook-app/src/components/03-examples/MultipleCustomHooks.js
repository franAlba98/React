import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

import '../02-useEfffect/effects.css'

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = /* if the data exists (with the duble nagation !!) then return the first element in the data array */ !!data && data[0];



    return (
        <div>
            <h1>BB Quotes</h1>
            <hr />
            {/* the loading? works the same way as an ngif so I can show a block when a condition is met...... the : marks the else and it's a must. */}
            {loading ?
                (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                )
                :
                (
                    <div>
                        <blockquote className="blockquote text-right">
                            <p className="mb-0">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>

                        <button type="button" className="btn btn-primary" onClick={increment}>Next quote</button>
                    </div>



                )
            }

        </div>

    )
}
