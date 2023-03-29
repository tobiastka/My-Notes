import '../stylesheets/TaskList.css';
import Task from './Task';

function TaskList() {
    return (
        <div className="list">
            <p className="list-title">
                all my task's
            </p>
            <div className="list-of-task">
                <Task task={"Ir a comprar al supermercado comida para esta noche"} taskDate={"13 / 24 / 25"} />
            </div>
        </div>
    )
}

export default TaskList