import React from 'react';

export default function DeleteTask(props) {
  function _deleteTask() {
    let API = `${props.api}/${props.data.id}`;
    console.log('props: ', props);

    fetch(API, {
      method: 'DELETE'
    }).then( () => props.reload() );
  }

  return (
    <button onClick={_deleteTask} className="btn btn-danger">Delete Task</button>
  )
}