import React, { useEffect, useState } from 'react'

export const GifGrid = ({ category }) => {

    //a conter button for tests sake
    const [count, setcount] = useState(0);


    //The use effect is used so when firing an event in the component (for example pressing a button) the getGifs won't be executed again. This way
    //we tell react that we want to make this request just one time
    useEffect(() => {
        getGifs();
        //The secon argument here (the empty array) specifies the useEffect dependencies. When using an empty array we tell react that useEffect doesn't 
        //have any dependencies so the getGifs must be executed a single time.
    }, []);

    const getGifs = async () => {

        const url = "https://api.giphy.com/v1/gifs/search?q=bongo+cat&limit=10&api_key=a7md0mTdcGuIQIFv0Bi1KbZYvgGANprI";
        const res = await fetch(url);
        const { data } = await res.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);


    }

    //getGifs();


    return (
        <div>
            <h3>{category}</h3>
            <h3>{count}</h3>
            <button onClick={() => setcount(count + 1)}></button>
        </div>
    )
}
