import '../stylesheets/Task.css';


function Task({ task, taskDate }) {
    return (
        <div className="task-body">
            <div className="task-description">
                <p>{task}</p>
            </div>
            <div className="task-date-body">
                <p className="date-title">date</p>
                <p className="date">{taskDate}</p>

            </div>
        </div>
    )
}

export default Task