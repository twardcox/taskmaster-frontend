import React, {useState} from 'react';

export default function AddTask(props) {
  let API = `${props.api}`;
  const [title, setTitle] = useState({});
  const [task, setTask] = useState({});

  let createTask = {
    title: title.title,
    description: task.description,
  };

  const _handleChange = (e) => {
    let field = e.target.name;
    let value = e.target.value;
    if (field === 'title') {
      setTitle({[field]: value});
    } else {
      setTask({[field]: value});
    }
  }

  const _setTask = e => {
    e.preventDefault();

    fetch(API, 
      {
        method: 'POST',
 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(createTask)
      }
    )
      .then( response => response.json() )
      .then( () => props.reload() );
  };

  return (
    <form onSubmit={_setTask}>
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
      <button className="btn btn-primary" type="submit">Submit</button>
      </fieldset>
    </form>
  )
}