import React from 'react';
import './Create.css';

function Create() {
  return (
    <form className="create">
      <label for="name">
        Name:
        <input type="text" id="name" className="name"></input>
      </label>
    </form>
  );
}

export default Create;
