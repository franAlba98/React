import React from 'react'

export const GifGridItem = ({ id, title, url }) => {

    //console.log(id,title,url);

    return (
        //next line the content of <div></div> uses the css class 'box' to make it look nicer
        <div className='box'>
            <img src={url} alt={title} />
            <p> {title} </p>
        </div>
    )
}
