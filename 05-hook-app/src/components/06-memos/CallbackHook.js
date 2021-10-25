import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

import '../02-useEfffect/effects.css'

//CallbackHook is used when I need to send a function to a child component or use a function in a useEffect
export const CallbackHook = () => {

    const [counter, setcounter] = useState(10)

    /* Esto es un quilombo asi que lo voy a anotar en español xD, la idea del useCallback es prevenir el que se vuelva a generar el componente hijo cada vez que el counter cambia. 
    Aca la idea es indicarle a React que la funcion no cambio por lo tanto no hay que generar el componente nuevamente (como un useMemo pero con funciones para componentes hijos)
    Entonces el useCallback va a guardar en memoria la funcion increment (que se encarga de aumentar el contador) y combinando con el React.memo en el componente hijo puedo prevenir
    que se vuelva a generar........  PERO!!!, para decirle a react que se debe de actualizar el valor del counter es necesario usar el parametro c => c+ en el setcounter en lugar 
    de la constante counter. Si, es un quilombo pero es la forma mas sencilla de prevenir el error*/
    const increment = useCallback((num)=>{
        setcounter(c => c+num);
    },[setcounter]);

    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment} />
        </div>
    )
}
