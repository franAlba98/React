import React, { Fragment, useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    //const categories = ['Estambul', 'London', 'New York'];

    const [categories, setCategories] = useState(['']);

    /* const handleAdd = () => {
        setCategories([...categories,'Venice']);
    } */

    return (
        //I can use properties when using the <AddCategory /> in this case I'm passing the setCategories
        <>
            <h2>GifExpertApp</h2>
            <AddCategory anyNameICanUseTheNameOfTheUseState={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category} />
                    ))
                }
            </ol>

        </>
    )
}

export default GifExpertApp;