import { useState } from "react"


//The idea of this hook is to handle all the Forms logic. Thanks to this I do not need to write de form logic in every component that uses a Form.



export const useForm = (initialState={}) => {
    const [values, setValues] = useState(initialState);

    const handleInputChange = ({ target }) => {
        //console.log(target.value);
        setValues({
            ...values,
            //[target.name] references the identifier in the input down below, thanks to that identifier having the same name as the json in formState I can use it here as a property in setFormState
            [target.name]: target.value
        })
    }

    return [values, handleInputChange];
}


