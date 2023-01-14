import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

//importamos la hoja de estilos de task.css
import "../../Styles/task.scss"

const TaskComponent = ({task}) => {

    useEffect(() => {
        console.log(`created task`)
        return () => {
            console.log(`task: ${task.name} is going to`)
        };
    },[task] );


return (
    <div>
        <h2 className='task-name'>
            Nombre: {task.name}
        </h2>
        <h3>
            Descripción: {task.description}
        </h3>
        <h4>
            Level: {task.level}
        </h4>
        <h5>
            This task is: {task.completed ? `COMPLETED`:`PENDING`}
        </h5>
    </div>
)
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};

export default TaskComponent;