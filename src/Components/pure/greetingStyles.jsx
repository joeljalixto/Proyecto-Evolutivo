import React, {useState} from 'react';

//definiendo estilos en constantes

//?estilos para usuario logueado
const loggedStyle = {
    color: "white",
}

//?estilos pars usuario no logueado
const unLoggerStyle = {
    color: "tomato",
    fontweight: "bold"
}

const GreetingStyles = (props) => {

    //generamos un estado para el componente 
    //y asi controlar si el usuario esta o no logueado
    const [logged,setLogged] = useState(false);

    const greetingUser = () => (<p>Hola, {props.name}</p>)
    const pleaseLogin= () => (<p>Please Login</p>)

    return (
        <div style={logged ? loggedStyle: unLoggerStyle}>
        {logged ? greetingUser() : pleaseLogin()}
        {/*{logged ? (<p>Hola, {props.name}</p>): (<p>Please Login</p>)} renderizado */} 
        {/*<p>Hola, {props.name}</p> esto se hace normal */} 
            <button onClick={()=>{
                console.log("boton pulsado");
                setLogged(!logged);
            }}>
                {logged ? "Logout" : "Login"}
            </button>
        </div>
    );
}

export default GreetingStyles;
