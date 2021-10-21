import { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [state, setstate] = useState({ data: null, loading: true, error: null });
    useEffect(() => {
        setstate({
            loading: true
        })
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setstate({
                    loading: false,
                    error: null,
                    data
                });
                console.log('DATA: ', data);
            });

    }, [url]);

    return state;

}
