import React, { useEffect , useState } from 'react'

export const Message = () => {


    const [coors, setCoords] = useState({x:0, y: 0});

    const {x,y} = coors;

    useEffect(() => {

        const mouseMove = (event) => {
            const coors = { x: event.x, y: event.y };
            setCoords(coors);
        }

        window.addEventListener('mousemove', mouseMove);


        return () => {
            window.removeEventListener('mousemove',mouseMove);
        }
    }, [])

    return (
        <div>
            <h3>Hello world</h3>
            <p>
                x:{x} y:{y}
            </p>
        </div>
    )
}
