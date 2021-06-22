import React, { useState } from 'react'
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export const MainApp = () => {

    const [user, setUser] = useState({})

    return (
        // value => propiedad  a compartir del componente con lo que envuelve
        <UserContext.Provider value={{
            user,
            setUser,
        }}>
            <AppRouter></AppRouter>
        </UserContext.Provider>
    )
}
