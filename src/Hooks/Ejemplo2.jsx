/**
 * Ejemplo de uso de:
 * -useState()
 * .useRef()
 * -useEffect()
 */

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    //vamos a crear 2 contadores distintos 
    //cada uno en un estado diferente 
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //vamos a crear una referencia con useRef() para asociar una variable con
    //un elemento del DOM del componente(vista HTML)
    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 +1)
    }

    function incrementar2(){
        setContador2(contador2+ 1)
    }

/**
 * trabajando con UseEffect
 */

/**
 * ?caso 1 : ejecutar siempre un snippet de codigo
 * cada vez que haya un cambio en el estado del componente
 * se ejecuta aquello que este adentro del useEffect()
 */
/*useEffect(() => {
    console.log("cambio en el estado del componente");
    console.log("mostrando referencia a elemento del DOM");
    console.log(miRef);
})*/

/**
 * ?Caso 2: ejecutar solo cuando cambie el contador 
 * cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
 * cada vez que haya un cambio en contador 2, se ejecuta lo que diga el useEffect()
 */

useEffect(() => {
    console.log("cambio en el estado del contador 1");
    console.log("mostrando referencia a elemento del DOM");
    console.log(miRef);    
}, [contador1,contador2]);




    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() *** </h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>
            {/*elemento referenciado*/}
            <h4 ref = {miRef}>ejemplo de elemento referenciado</h4>
            {/*botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
