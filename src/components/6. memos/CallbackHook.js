import React, { useCallback, useState } from 'react'
import '../2. useEffect/effects.css'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)


    /**
     * Pasar una funcion memorizada de esa funcion, si la dependencia no ha cambiado
     */
    const increment = useCallback((num) => {
        setCounter(c => c + num);
    },
        [setCounter],
    )

    return (
        <div>
            <h1>CallbackHook: {counter}</h1>
            <hr></hr>
            <ShowIncrement increment={increment}></ShowIncrement>
        </div>
    )
}
