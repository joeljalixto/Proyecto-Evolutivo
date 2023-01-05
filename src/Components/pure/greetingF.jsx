import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
    // breve introduccion a useState
    //const [variable,metodo para actualizarla] = useState(valor inicial)
    
    const [age , setage] = useState(29);
    
    const birthday = () => {
        //este metodo actualizaria el state
        setage(age+1)
    }

    return (
        <div>
            <div>
                <h1>
                    ¡Hola {props.name} desde componente funcional! 
                </h1>
                <h2>
                    Tu edad es de :{age}
                </h2>
                <div>
                    <button onClick = {birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
