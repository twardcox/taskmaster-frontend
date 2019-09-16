import React, {useState, useEffect} from 'react';

import History from './components/History.js';
import AssignUser from './components/AddUser.js';
import UpdateStatus from './components/UpdatedStatus.js';
import DeleteTask from './components/DeleteTask.js';
import AddTask from './components/AddTask.js';
import AddImage from './components/AddImage.js';

import './App.scss';

// const API = 'http://taskmaster-dev22.us-west-2.elasticbeanstalk.com/api/v1/tasks';
const API = 'http://localhost:5000/api/v1/tasks';

// On Load - Get that data from the API
// Iterate and display major task points
// Some Interaction to expose history

// TODO : Add a link to delete or change status

function App() {
  const [tasks, setTasks] = useState([]);

  function _getTasks() {
    fetch(API)
      .then( data => data.json() )
      .then( fetchedTasks => {
        setTasks(fetchedTasks);
      });
  }

  useEffect( _getTasks, []);

  return (
    <React.Fragment>
      <header className="jumbotron">
        <h1>TaskMaster</h1>
      </header>
      <div className="App container">
        <h1>Task List</h1>
        <ul>
          {tasks.map( task => {
            console.log('task: ', task);
            return (
              <li key={task.id}>
                <details>
                  <summary>
                    <span>{task.title}</span><br/>
                  </summary>
                  <img src={task.image} alt={task.title}/>
                  <History history={task.history}/>
                  <AssignUser api={API} data={task} reload={_getTasks}/>
                  <UpdateStatus api={API} data={task} reload={_getTasks}/>
                  <br/>
                  <AddImage api={API} data={task} reload={_getTasks}/>
                  <br/>
                  <DeleteTask api={API} data={task} reload={_getTasks}/>
                </details>
              </li>
            )
          })}
        </ul>
        <AddTask api={API} reload={_getTasks}/>
      </div>
    </React.Fragment>
  );
}

export default App;