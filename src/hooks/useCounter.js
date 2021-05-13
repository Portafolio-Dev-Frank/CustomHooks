import React, { useState } from 'react'

// ====================================================================
// un custom hook es una funcionalidad con la  misma estructura de un 
// funcional component => racf
// ====================================================================

export const useCounter = (initialState = 10) => {

    const [state, setstate] = useState(initialState)

    const increment = (factor = 1) => {
        setstate(state + factor)
    }

    const decrement = (factor = 1) => {
        setstate(state - factor);
    }

    const reset = () => {
        setstate(initialState);
    }

    return {
        state,
        increment,
        decrement,
        reset
    }

}
