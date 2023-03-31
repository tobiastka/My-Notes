import '../stylesheets/TaskList.css';
import Task from './Task';

function TaskList({ tasks, setTasks }) {
    const deleteTask = (taskDelete) => {
        const notDeletedTasks = tasks.filter(task => task.data !== taskDelete.data ? true : task.date !== taskDelete.date)
        setTasks(notDeletedTasks);
    }
    return (
        <div className="list">
            <p className="list-title">
                all my task's
            </p>
            <div className="list-of-task" >
                {
                    tasks ?
                        tasks.map((task, index) => <Task key={index} task={task.data} taskDate={task.date} important={task.important} deleteTask={deleteTask} />)
                        :
                        <></>
                }

            </div>
        </div>
    )
}

export default TaskList