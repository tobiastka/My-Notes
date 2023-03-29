import { useState } from 'react';
import Calendar from './components/Calendar';
import Header from './components/Header';
import TaskCreator from './components/TaskCreator';
import TaskList from './components/TaskList';
import './stylesheets/App.css';

function App() {

  const [tasks, setTasks] = useState({
    toDoTasks: [],
    completedTasks: []
  })


  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <div className="app-task-container">
          <div className="app-new-task">
            <TaskCreator />
          </div>
          <div className="app-tasks-list">
            <TaskList />
          </div>
        </div>
        <div className="app-calendar-container">
          <div className="calendar-container">
            <div className="calendar">
              <Calendar />
            </div>
          </div>
          <div className="proyect-description">

          </div>
        </div>
      </div>
      <div className="app-footer">

      </div>
    </div>
  );
}

export default App;
