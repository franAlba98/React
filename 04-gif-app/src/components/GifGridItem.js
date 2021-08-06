import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ({title, url }) => {


    return (
        //next line the content of <div></div> uses the css class 'box' to make it look nicer
        <div className='box animate__animated animate__fadeIn' >
            <img src={url} alt={title} />
            <p> {title} </p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
