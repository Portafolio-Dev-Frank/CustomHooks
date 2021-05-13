import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coord, setcoord] = useState({
        x: 0,
        y:0
    })

    const {x,y} = coord;

    useEffect(() => {

        const mouseMove = (e) => {
            setcoord({
                ...coord,
                x: e.x,
                y: e.y
            })
            // const coors = {x: e.x, y: e.y}
            console.log(":D");
        }

        window.addEventListener('mousemove', mouseMove)

        return () => {
            window.removeEventListener('mousemove', mouseMove)
            console.log("componente Message desmontado");
        }
    }, [])

    return (
        <div>
            <h3>eres genial</h3>
            <h5>{x}</h5>
            <h5>{y}</h5>
        </div>
    )
}
