import React, { memo } from 'react'

//memo allows me to indicate that this component must be renderized again only if it's parameters change (in this case value)
export const Small = memo(({value}) => {
    console.log('Hello there!');
    return (
        <small>
            {value}
        </small>
    )
}
)
