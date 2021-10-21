import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    //if I don't include the second argument [] then the useEffect will be excecuted every time a modification is made. That argument specifies it's dependency so the empty array tells it to run just one time when the component is created.
    //and the email in this case tells it to run the effect when the email is modified
    useEffect(() => {
        console.log('hey'); 
    }, [email]);

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(formValues);
    }


    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
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

            <div className='form-group'>
                <input
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='*****'
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <button type='submit' className='btn btn-primary'>
                SAVE
            </button>

        </form>
    )
}
