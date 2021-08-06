import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {




    const {data:images /* change name from data to images */,loading} = useFetchGifs(category);  

    //In line 24 I'm sending the img operator spread (...) that makes it possible to send every img properties as independent properties, so in GifGrid it's easier to work
    //with each property in GifGridItem
    return (
        <>
            <h3>{category}</h3>

            {loading && <p className='animate__animated animate__flash'>Loading...</p>}
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
