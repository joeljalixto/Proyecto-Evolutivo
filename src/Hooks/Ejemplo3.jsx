/**
 * Ejemplo Hooks
 * -useState()
 * -useContext()
 */

import React, {useState, useContext} from 'react';

/**
 * 
 * @returns componente 1
 * dispone de un contexto que va tener un valor 
 * que recibe desde el padre
 */

const miContexto = React.createContext(null)

const Componente1 = () => {
    const state = useContext(miContexto);
    //inicializamos un estado vacio que va a rellenarse con los datos del contexto padre 


    return (
        <div>
            <h1>
                El token es:{state.token}
            </h1>
            {/*pintamos el componente 2*/}
            <Componente2></Componente2>
        </div>
    );
}
const Componente2 = () => {

    const state = useContext(miContexto);

    return(
        <div>
            <h2>
                La sesion es: {state.sesion}
            </h2>
        </div>
    );
}


export default function MiComponenteConContexto(){

    const estadoInicial = {
        token: "1234567",
        sesion: 1
    }

//creamos el estaodo de este componente
const [sessionData, setSessionData] = useState(estadoInicial)

function actualizarSesion(){
    setSessionData(
        {
            token: "JOEL",
            sesion: sessionData.sesion +  1
        }
    )
}

    return(
        <div>
            <miContexto.Provider value={sessionData}>
            {/*todo lo que esta aqui adentro puede leer los datos de sesionData 
              ademas si se actualiza, los componentes de aqui tambien lo actualizan */}
            <h1>
                *** Ejemplo de useState() y useContext() ***
            </h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar Sesion</button>
            </miContexto.Provider>
        </div>
    )
}




