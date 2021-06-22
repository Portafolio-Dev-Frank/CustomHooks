import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomePage = () => {

    const { user } = useContext(UserContext)

    console.log(user);

    return (
        <div>
            <h1>HomeScreen</h1>
            <hr></hr>
            <pre>{JSON.stringify(user, null, 3)}</pre>
        </div>
    )
}
