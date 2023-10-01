import './../App.css';
import React from 'react';
import delbtn from './../images/delbtn.jpg';

const ToDoList = (props) => {
  return (
    <>
      <div className="todo-container">
        {props.todos.map((todoItem, index) => {
          let { id, todo, complete } = todoItem;

          return (
            <div key={index} className="data-card">
              <p>
                {todo} <br />
                {complete === true ? (
                  'Task is done :-) '
                ) : (
                  <>
                    <span>Done</span>
                    <input
                      type="radio"
                      name="tododone"
                      value="tododone"
                      onChange={() => props.setComplete(id)}
                    />
                  </>
                )}
                <br />
                Delete ToDo:
                <input
                  type="image"
                  src={delbtn}
                  alt="delete"
                  onClick={() => props.deleteTodo(id)}
                  width="14"
                  height="14"
                />
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ToDoList;
