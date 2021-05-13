import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import './effects.css'

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log("email cambio");
        return () => {
            console.log("se limpio el componente ");
        }
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
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

            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholde="***"
                    value={password}
                    onChange={handleInputChange}></input>
            </div>

            <button type="submit" className="btn btn-success">
                guardar
            </button>
        </form>
    )
}
