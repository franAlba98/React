import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    const [counter, setcounter] = useState({
        counter1: 10,
        counter2: 20
    });
    const {counter1, counter2} = counter; 

    return (
        <>
            {<h1>Counter1 {counter1}</h1>}
            {<h1>Counter2 {counter2}</h1>}
            <hr />
            <button
                className="btn btn-primary"
                onClick={
                    () => {
                        //when calling setcounter i'm specifing the new state for this useState so the elements I do not specify will be lost.
                        //If I do not inclue counter2 in set counter, when I use it, it will disapear the value of counter2
                        /* setcounter({
                            counter1: counter1 + 1,
                            counter2: counter2
                        }); */

                        //Another enven easier way is to use the spread operator to preserve the previous state *wink*
                        setcounter({
                            ...counter,
                            counter1: counter1 + 1
                        });

                    }
                }
            >
                +1
            </button>
        </>
    )
}
