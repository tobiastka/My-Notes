import '../stylesheets/TaskCreator.css'

const TaskCreator = () => {
    return (
        <div className="task-creator">
            <p className='task-creator-description'>add a task</p>
            <div className='task-creator-body'>
                <div className="task-creator-new-task-body">
                    <textarea className="task-creator-new-task-input">
                    </textarea>
                    <button className="task-creator-new-task-button">
                        create
                    </button>
                </div>
                <div className="task-creator-details">

                    <button className="important-button">
                        important
                    </button>
                    <input type="date" className="date-button">

                    </input>


                </div>
            </div>
        </div>
    )
}

export default TaskCreator;