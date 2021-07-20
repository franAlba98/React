import React, { Fragment, useState } from "react"

const GifExpertApp = () => {

    //const categories = ['Estambul', 'London', 'New York'];

    const [categories, setCategories] = useState(['Estambul', 'London', 'New York']);

    const handleAdd = () => {
        setCategories([...categories,'Venice']);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {
                    categories.map( category => {
                        return <li key={category}> {category} </li>
                    })
                }
            </ol>

        </>
    )
}

export default GifExpertApp;