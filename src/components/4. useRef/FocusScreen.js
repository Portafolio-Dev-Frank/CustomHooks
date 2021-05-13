import React, { useRef } from 'react'
import '../2. useEffect/effects.css'

export const FocusScreen = () => {


    /**Hook para  */
    const inputRef = useRef();


    const handleClick = () => {
        // document.querySelector('input').select();
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr></hr>
            <input ref={inputRef} className="form-control" placeholder="nombre"></input>
            <button className="btn btn-outline-primary mt-5"
            onClick={handleClick} > Focus </button>
        </div>
    )
}
