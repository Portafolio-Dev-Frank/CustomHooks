import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../2. useEffect/effects.css'
import { Small } from './Small';

export const Memorize = () => {

    const { state, increment } = useCounter(10);
    const [show, setshow] = useState(true)

    return (
        <div>
            <h1>Memorize</h1>
            <h1>Counter: <Small value={state}></Small></h1>
            <hr></hr>
            <button className="btn btn-primary" onClick={() => increment(1)}>+1</button>
            <button className="btn btn-success" onClick={() => setshow(!show)}>show/Hide {JSON.stringify(show)} </button>
        </div>
    )
}
