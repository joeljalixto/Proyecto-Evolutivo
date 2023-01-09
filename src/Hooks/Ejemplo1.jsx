/**
 * Ejemplo del uso del Hook useState
 * 
 * Crear un componente de tipo funcion y acceder a su estado 
 * privado a traves de un hook y ademas, poder modificarlo 
 */

import React, {useState} from 'react';

const Ejemplo1 = () => {

    //Valor inicial para un contador
    const valorInicial = 0;

    //Valor inicial para una persona
    const personaInicial = {
        nombre : "Joel",
        email: "joeljalixto20@gmail.com"
    }

/**
 * queremos que el valorInicial y personaInicial sean 
 * parte del estado del componente par asi poder gestionar su cambio 
 * y que este se vea reflejado en la vista del componente
 * const [nombreVariable, funcionParaCambiar] = useState(ValorInicial)
 */

const [contador, setContador] = useState(valorInicial);
const [persona, setPersona] = useState(personaInicial);

//funcion para actualizar el estado privado que contiene el contador

function incremmentarContador(){
    //? funcionParaCambiar(nuevoValor)
    setContador(contador+1)
}

//funcion para actualizar el estado de persona en el componente

function actualizarPersona(){
    setPersona(
        {
            nombre: "diego",
            email: "diegojalixto15@gmail.com",
    }
    )
}

    return (
        <div>
            
            <h2> Contador:  {contador}</h2>
            <h2> Datos de la persona: </h2>
            <h3> Nombre: {persona.nombre}</h3>
            <h3> email:{persona.email}</h3>
            {/*Bloque de botones para actualizar el estado del componente*/}
            <button onClick={incremmentarContador}>incremmentarContador</button>
            <button onClick={actualizarPersona}>actualizarPersona</button>
        </div>
    );
}

export default Ejemplo1;
