import logo from './logo.svg';
import './App.css';
import Greeting from "./Components/pure/greeting"
import GreetingF from './Components/pure/greetingF';
import TaskListComponent from './Components/Container/task_list';
import Ejemplo1 from './Hooks/Ejemplo1';
import Ejemplo2 from './Hooks/Ejemplo2';
import MiComponenteConContexto from './Hooks/Ejemplo3';

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
        <MiComponenteConContexto></MiComponenteConContexto>
      </header>
    </div>
  );
}

export default App;
