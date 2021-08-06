import { useState, useEffect } from "react"
import getGifs from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //The use effect is used so when firing an event in the component (for example pressing a button) the getGifs won't be executed again. This way
    //we tell react that we want to make this request just one time
    useEffect(() => {
        getGifs(category).then(img => {
            setState({
                data: img,
                loading: false
            })

        });
        //The secon argument here (the empty array) specifies the useEffect dependencies. When using an empty array we tell react that useEffect doesn't 
        //have any dependencies so the getGifs must be executed a single time.
        //In contrast when adding category as a dependency I'm specifing that if category changes I want to reload again what is inside the useEffect
    }, [category]);

    return state;
}
