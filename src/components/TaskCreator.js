import { useState } from 'react'
import '../stylesheets/TaskCreator.css'

const TaskCreator = ({ setTasks }) => {
    const taskInitialState = { data: "", date: "", important: false };
    const [task, setTask] = useState(taskInitialState);
    const taskHandler = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.name === "important" ? !task.important : e.target.value
        })
    }

    const tasksHandler = () => {
        if (!task.data) return alert("Tarea vacia")
        if (task.important) {
            setTasks((oldTasks) => {
                return [task, ...oldTasks]
            })
        } else {
            setTasks((oldTasks) => {
                return [...oldTasks, task]
            })
        }
        setTask((oldTask) => {
            return taskInitialState;
        })
    }

    return (
        <div className="task-creator">
            <p className='task-creator-description'>add a task</p>
            <div className='task-creator-body'>
                <div className="task-creator-new-task-body">
                    <textarea value={task.data} name='data' className="task-creator-new-task-input" onChange={(e) => { taskHandler(e) }}></textarea>
                    <button className="task-creator-new-task-button" onClick={tasksHandler}>
                        create
                    </button>
                </div>
                <div className="task-creator-details">
                    <button name='important' className={`important-button ${task.important ? "task-important" : ""}`} onClick={(e) => { taskHandler(e) }}>
                        important
                    </button>
                    <input value={task.date} name='date' type="date" className="date-button" onChange={(e) => { taskHandler(e) }}></input>
                </div>
            </div>
        </div>
    )
}

export default TaskCreator;