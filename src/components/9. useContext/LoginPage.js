import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext)

    const quemado = {
        id: 1234,
        nombre: 'juancho',
        email: 'juan@rmail.email.co'
    }

    return (
        <div>
            <h1>LoginPage</h1>
            <hr></hr>
            <button className="btn btn-primary"
                onClick={() => setUser(quemado)}>
                    Login
            </button>
        </div>
    )
}
