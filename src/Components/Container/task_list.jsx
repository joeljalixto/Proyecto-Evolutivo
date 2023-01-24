import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import {Task} from '../../models/task.class';
import TaskComponent from '../pure/task';

//importamos la hoja de estilos task.css
import "../../Styles/task.scss"
import TaskForm from '../pure/forms/taskForm';


const TaskListComponent = () => {

    const defaultTask1 = new Task(`Example1`,`Description1`,true,LEVELS.NORMAL);

    const defaultTask2 = new Task(`Example2`,`Description2`,false,LEVELS.URGENT);

    const defaultTask3 = new Task(`Example3`,`Description3`,false,LEVELS.BLOCKING);

    //estado del componente
    const [tasks, setTasks] = useState([defaultTask1,defaultTask2,defaultTask3]);
    const [loading, setLoading] = useState(true)     

    //control del ciclo de vida del componente

    useEffect(() => {
        console.log("task state has been modified");
        setLoading(false);
        return () => {
            console.log("tasklist component is going to unmount...");
        };
    }, [tasks]);

    function completeTask(task){
        console.log("completed this task",task);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                {/*car-header {tittle}*/}
                    <div className='card-header p-3'>
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                    {/*card-body (content)*/}
                    <div className='card-body' data-mdb-perfect-scrollbar="true" style={{position:"relative",height:"400px"}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Priority</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task,index)=> {
                                    return (
                                        <TaskComponent 
                                        key={index} 
                                        task={task}
                                        complete ={completeTask}
                                        >
                                        </TaskComponent>
                                        )
                                } 
                            )
                        }   
                            </tbody>
                        </table>
                    </div>
                    <TaskForm></TaskForm>
                </div>
            </div>
            {/*aplicar un for o un map para redendizar a una lista*/}
            {/*<TaskComponent task = {defaultTask}></TaskComponent>*/}
        </div>
    );
};


export default TaskListComponent;
