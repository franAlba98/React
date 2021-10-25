import { useEffect, useState, useRef } from 'react'

export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setstate] = useState({ data: null, loading: true, error: null });

    //the useEffect here helps me to know when the component is mounted so I can prevent calling the useState when the component is not mounted.... and only do it when, in fact, is mounted.
    useEffect(() => {

        //it's inside the return so the false is stablished just when the component is unmounted...
        return () => {
            isMounted.current = false;
        }
    }, []);


    useEffect(() => {
        setstate({
            loading: true
        })
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current) {
                    setstate({
                        loading: false,
                        error: null,
                        data
                    });
                } else {
                    console.log('setState not invoked');
                }

            });

    }, [url]);

    return state;

}
