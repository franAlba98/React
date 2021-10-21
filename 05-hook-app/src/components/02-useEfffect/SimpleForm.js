import React, {useState } from 'react'

import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        eamail: ''
    });

    const { name, email } = formState;

    //if I don't include the second argument [] then the useEffect will be excecuted every time a modification is made. That argument specifies it's dependency so the empty array tells it to run just one time when the component is created.
    /* useEffect(() => {
        console.log('hey');
    }, []); */

    const handleInputChange = ({ target }) => {
        //console.log(target.value);
        setFormState({
            ...formState,
            //[target.name] references the identifier in the input down below, thanks to that identifier having the same name as the json in formState I can use it here as a property in setFormState
            [target.name]: target.value
        })
    }

    return (
        <>
            {/* <h1>useEffect</h1> */}
            <hr />
            <div className='form-group'>
                {/* name=name establishes the identifier wich i'm refering to. (In this case the name in line 12) */}
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Username'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className='form-group'>
                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='email@gmail.com'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {/*showing the component Message with a condition (in this case name must be 123 to show the component)*/}
            {(name === '123') && <Message />}
        </>
    )
}
