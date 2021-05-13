import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import './layout.css'

export const Layout = () => {

    const { state: counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];

    const pTag = useRef()

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>LayoutEffects</h1>
            <hr></hr>

            <blockquote className="blockquote " >
                <p ref={pTag} className="mb-0">{quote}</p>
            </blockquote>

            <button className="btn btn-primary" onClick={() => increment(1)}>Siguiente frase</button>
        </div>
    )


}
