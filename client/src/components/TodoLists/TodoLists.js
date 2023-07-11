
import React from 'react'

function TodoLists({data, editHandler, deleteHandler}) {
    const { _id, title, description } = data;

  return (
    <li key={_id}>
      <div className="title-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="button-container">
        <button name={_id} className="button" onClick={editHandler}>
          🖊️
        </button>
        <button name={_id} className="button" onClick={deleteHandler}>
          🗑️
        </button>
      </div>
    </li>
  )
}

export default TodoLists