import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import '../2. useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const { state: counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0];

   
    console.log(author, quote);

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr></hr>

            {
                loading ? (<div className="alert alert-info text-center">
                    Loading...
                </div>) : (
                    <blockquote className="blockquote " >
                        <p className="mb-0">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                )
            }

            <button className="btn btn-primary" onClick={() => increment(1)}>Siguiente frase</button>

        </div>

    )
}
