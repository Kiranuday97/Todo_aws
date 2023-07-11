import { Link } from "react-router-dom";
import TodoLists from "../TodoLists/TodoLists";
import UpdateTodo from "../UpdateTodo/UpdateTodo";

import axios from "axios";
import React, { useState, useEffect } from "react";

function DisplayTodo() {
  const [infoTodo, setInfoTodo] = useState([]);
  const [id, setId] = useState("");
  const [update, setUpdate] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/todoapp")
      .then((res) => {
        console.log(res.data);
        setInfoTodo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);

  const deleteHandler = (e) => {
    axios.delete(`http://localhost:4000/api/todoapp/${e.target.name}`);
    setInfoTodo((data) => {
      return data.filter((todo) => todo._id !== e.target.name);
    });
  };
  const editHandler = (e) => {
    setId(e.target.name);
    setModal(true);
  };

  const updateHandler = () => {
    setUpdate(!update);
  };

  const closeHandler = () => {
    setId("");
    setModal(false);
  };

  return (
    <div>
      <section >
        <div className="front-content">
        <Link to="/add-todo" className="button-new">
          <button className="todo-btn">Add new todo</button>
        </Link>
        <section className="todo-data">
          <h1></h1>
          <ul className="todo-list-block">
            {infoTodo.map((data, index) => (
              <TodoLists
                key={index}
                data={data}
                infoTodo={infoTodo}
                editHandler={editHandler}
                deleteHandler={deleteHandler}
              />
            ))}
          </ul>
        </section>

        {modal ? (
          <section className="update-container">
            <div className="update-todo-data">
              <p onClick={closeHandler} className="close">
                &times;
              </p>
              <UpdateTodo
              _id={id}
              closeHandler={closeHandler}
              updateHandler={updateHandler}
            />
              
            </div>
          </section>
        ) : (
          ""
        )}
        </div>
      </section>
    </div>
  );
}

export default DisplayTodo;
