import '../stylesheets/Task.css';


function Task({ task, taskDate, important, deleteTask }) {
    return (
        <div className={`task-body ${important ? "important-task" : ""}`} onClick={() => { deleteTask({ data: task, date: taskDate }) }}>
            <div className="task-description">
                <p>{task}</p>
            </div>
            <div className="task-date-body">
                <p className="date-title">date</p>
                <p className="date">{taskDate ? taskDate : "no date"}</p>

            </div>
        </div>
    )
}

export default Task