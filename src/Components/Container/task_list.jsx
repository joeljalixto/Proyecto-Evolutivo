import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import {Task} from '../../models/task.class';
import TaskComponent from '../pure/task';

//importamos la hoja de estilos task.css
import "../../Styles/task.scss"

const TaskListComponent = () => {

    const defaultTask = new Task(`Example`,`Default description`,false,LEVELS.NORMAL);

    //estado del componente
    const [tasks, setTasks] = useState(defaultTask);
    const [loading, setLoading] = useState(true)

    //control del ciclo de vida del componente

    useEffect(() => {
        console.log("task state has been modified");
        setLoading(false);
        return () => {
            console.log("tasklist component is going to unmount...");
        };
    }, [tasks]);

    const changeCompleted = (id) => {
        console.log(`TODO: Cambiar estado de una tarea`)
    }

    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
            </div>
            {/*aplicar un for o un map para redendizar a una lista*/}
            <TaskComponent task = {defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
