
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CreateTodo() {
    const [todoInfo, setTodoInfo] = useState({title: "", description: ""});
    
    function handleChange(e) {
        setTodoInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
      }

      function handleSubmit(e) {
        e.preventDefault();
    
        axios
          .post("http://localhost:4000/api/todoapp", todoInfo)
          .then((res) => {
            setTodoInfo({ title: "", description: "" });
            console.log(res.data.message);
          })
          .catch((err) => {
            console.log("Error couldn't create TODO");
            console.log(err.message);
          });
      }
    
  return (
    <section>
        <Link to="/">
        <button type="button" className="todo-btn-form todo-btn-back">
          🔙 back
        </button>
      </Link>

    <section className='todo-data'>
        <form 
        onSubmit={handleSubmit} 
        className='form-container' noValidate>
            <label htmlFor="title" className='label'>Todo Title</label>

            <input type="text"
            name='title'
            value={todoInfo.title}
            onChange={handleChange}
            className='input'
             />
            <label className="label" htmlFor="description">
            Describe it !
          </label>
          <input
            type="textarea"
            name="description"
            value={todoInfo.description}
            onChange={handleChange}
            className="input"
          />

<button type="submit" className="todo-btn-form">
            ➕ create todo
          </button>
        </form>
    </section>
    </section>
   
  )
}

export default CreateTodo