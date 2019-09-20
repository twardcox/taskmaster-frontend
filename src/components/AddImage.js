import React from 'react';

let form = new FormData();

export default function AddImage(props) {
  let API = `${props.api}/${props.data.id}/image`;

  const _handleChange = e => {
    e.preventDefault();
    let value = e.target.files ? e.target.files[0] : e.target.value;
    form.set(e.target.name, value);
  }

  const _uploadFile = e => {
    e.preventDefault();
    
    fetch(API, {
        method: 'POST',
        mode: 'no-cors',
        body: form,
      })
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response))
      .then( () => props.reload() );
  }

  return (
    <div>
      <form onSubmit={_uploadFile} action={API} method="POST" encType="multipart/form-data">
        <div>
        <label>
          <span>Upload Image</span>
          <input onChange={_handleChange} name="file" type="file" className="btn btn-primary"/>
        </label>
        <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  )
}