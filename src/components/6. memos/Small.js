import React from 'react'

//Memoriza el componente y se renderiza nuevamente si las propiedades cambian
export const Small = React.memo(({ value }) => {

    console.log("volvi a llamar el SMALL :(");

    return (
        <small> {value} </small>
    )
})
