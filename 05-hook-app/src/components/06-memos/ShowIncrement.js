import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {

    console.log('running :D');
    return (
        <div>
            <button
            className='btn btn-primary mt-2'
            onClick={()=>{
                increment(5);
            }}
            >+1</button>
        </div>
    )
})
