import React, {useState, useEffect} from 'react';

export default function AddTask(props) {

  let form = new FormData();

  // For the JSON version of the form
  const [formData, setFormData] = useState({});

  // submits JSON formData
  function _handleSubmit(event) {
    event.preventDefault();
    fetch(`${API}`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},

      mode: 'no-cors',
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }



  useEffect( () => {
    fetch(API, {mode:'cors'})
      .then(data => data.json())
      .then(tasks => {console.log(tasks);})
      .catch(console.error);
  });

  function _handleChange(event) {
    setFormData( {...formData, [event.target.name]:event.target.value});
  }

  // const [tasks, setTasks] = useState([]);

  // function _getTasks() {
  //   fetch(API)
  //     .then( data => data.json() )
  //     .then( fetchedTasks => {
  //       setTasks(fetchedTasks);
  //     });
  // }

  let API = `${props.api}`;

  // let createTask = {
  //   title: title.title,
  //   description: task.description,
  //   status: task.status,
  //   assignee: task.assignee
  // };

  // const _setTask = e => {
  //   e.preventDefault();

  //   fetch(API, 
  //     {
  //       method: 'POST',
 
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       mode: 'cors',
  //       body: JSON.stringify(createTask)
  //     }
  //   )
  //     .then( response => response.json() )
  //     .then( () => props.reload() );
  // };

  return (
    <form onSubmit={_handleSubmit}>
      <fieldset>
      <legend>Add a new task:</legend>

      <div>
        <label htmlFor="title">Task Title</label>
        <input onChange={_handleChange} type="text" name="title" id="title"></input>
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea onChange={_handleChange} type="text" name="description" id="description" rows="4" cols="50"></textarea>
      </div>

      <div>
        <label htmlFor="status">Task Status</label>
        <input onChange={_handleChange} type="text" name="status" id="status"></input>
      </div>

      <div>
        <label htmlFor="assignee">Task Assignee</label>
        <input onChange={_handleChange} type="text" name="assignee" id="assignee"></input>
      </div>
      
      <button className="btn btn-primary" type="submit">Submit</button>
      </fieldset>
    </form>
  )
}