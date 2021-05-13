import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../2. useEffect/effects.css'

export const MemoHook = () => {

    const { state, increment } = useCounter(500);
    const [show, setshow] = useState(true)

    const procesoPesado = (iteraciones) => {
        for (let i = 0; i<iteraciones; i++){
            console.log('hay vamos....');
        }
        return `${iteraciones} iteraciones realizadas` 
    }

    const memoProcesoPesado = useMemo(() => procesoPesado(state), [state]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h1>Counter: <small>{state}</small></h1>
            <hr></hr>

            <p>{memoProcesoPesado}</p>

            <button className="btn btn-primary" onClick={() => increment(1)}>+1</button>
            <button className="btn btn-success" onClick={() => setshow(!show)}>show/Hide {JSON.stringify(show)} </button>
        </div>
    )
}
