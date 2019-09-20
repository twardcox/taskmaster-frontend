import React from 'react';

export default function UpdateStatus(props) {
  function _updateStatus() {
    let API = `${props.api}/${props.data.id}/state`;

    fetch(API, {
      method: 'PUT',
      mode: 'no-cors'
    }).then( () => props.reload() );
  }

  return (
    <button className="btn btn-success" onClick={_updateStatus}>Update Status</button>
  )
}