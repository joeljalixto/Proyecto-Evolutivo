import logo from './logo.svg';
import './App.css';
import Greeting from "./Components/pure/greeting"
import GreetingF from './Components/pure/greetingF';
import TaskListComponent from './Components/Container/task_list';
import Ejemplo1 from './Hooks/Ejemplo1';
import Ejemplo2 from './Hooks/Ejemplo2';
import MiComponenteConContexto from './Hooks/Ejemplo3';
import Ejemplo4 from './Hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio greeting.jsx*/}
        {/*<Greeting name = "Martin"></Greeting>*/}
        {/*<GreetingF name = "Martin"></GreetingF>*/}
        {/*Componente de listado de tareas>*/}
        {/*<TaskListComponent></TaskListComponent>*/}
        {/*Ejemplos de uso de hooks*/}
        {/*<Ejemplo1></Ejemplo1>*/}
        {/*<Ejemplo2></Ejemplo2>*/}
        {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
        <Ejemplo4 nombre = "joel">
        {/*todo lo que hay aqui dentro es tratado como un props.children*/}
          <h3>
            contenido del props.children
          </h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
