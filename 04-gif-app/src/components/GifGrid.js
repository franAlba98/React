import React, { useEffect, useState } from 'react'
import getGifs from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    const [images, setimages] = useState([]);

    //The use effect is used so when firing an event in the component (for example pressing a button) the getGifs won't be executed again. This way
    //we tell react that we want to make this request just one time
    useEffect(() => {
        getGifs(category).then(setimages);
        //The secon argument here (the empty array) specifies the useEffect dependencies. When using an empty array we tell react that useEffect doesn't 
        //have any dependencies so the getGifs must be executed a single time.
        //In contrast when adding category as a dependency I'm specifing that if category changes I want to reload again what is inside the useEffect
    }, [category]);

    

    //getGifs();

    //In line 49 I'm sending the img operator spread (...) that makes it possible to send every img properties as independent properties, so in GifGrid it's easier to work
    //with each property in GifGridItem
    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>

    )
}
