import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'

export const CounterWithCustomHook = () => {

    const { state: counter, increment, decrement, reset } = useCounter(50);

    return (
        <>
            <h1>Counter with hook {counter}</h1>
            <hr></hr>
            <button className="btn btn-secondary" onClick={() => increment(2)}>+2 </button>
            <button className="btn btn-danger" onClick={() => decrement(2)}> -2</button>
            <button className="btn btn-primary" onClick={reset}> Reset</button>
        </>
    )
}
