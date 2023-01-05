import logo from './logo.svg';
import './App.css';
import Greeting from "./Components/pure/greeting"
import GreetingF from './Components/pure/greetingF';
import TaskListComponent from './Components/Container/task_list';
import AComponent from './Components/AComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio greeting.jsx*/}
        {/*<Greeting name = "Martin"></Greeting>*/}
        {/*<GreetingF name = "Martin"></GreetingF>*/}
        {/*Componente de listado de tareas>*/}
        <TaskListComponent></TaskListComponent>
        <AComponent></AComponent>
      </header>
    </div>
  );
}

export default App;
