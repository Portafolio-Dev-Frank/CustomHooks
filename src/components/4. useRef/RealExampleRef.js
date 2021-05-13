import React, { useState } from 'react'
import '../2. useEffect/effects.css'
import { MultipleCustomHooks } from '../3. examples/MultipleCustomHooks'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr></hr>
            {show && <MultipleCustomHooks></MultipleCustomHooks>}
            <button className="btn btn-secondary mt-5" onClick={() => setShow(!show)}>ver/ocultar</button>

        </div>
    )
}
