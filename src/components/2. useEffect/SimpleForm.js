import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState;

    //segundo argumento [] vacio para que se dispare solo una vez
    useEffect(() => {
        // console.log('hey');
    }, [])
    //segundo argumento formulario para que se dispare cuando cambia el formulario
    useEffect(() => {
        // console.log('formstate cambio');
    }, [formState])

    //segundo argumento email para que se dispare cuando cambia el email
    useEffect(() => {
        // console.log('email cambio');
    }, [email])

    const handleInputChange = ({ target }) => {
        setformState({
            ...formState,
            [target.name]: target.value

        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr></hr>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholde="nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}></input>
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholde="email@email.co"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}></input>
            </div>

            {(name == '123') && <Message></Message>}
        </>
    )
}
