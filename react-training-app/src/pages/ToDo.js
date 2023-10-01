import './../App.css';
import top from './../images/coffee_book_eye_glasses.jpg';
import React from 'react';
import { useState, useEffect } from 'react';
import ToDoList from './../components/ToDoList.js';

const ToDo = () => {
  let Today = new Date().toLocaleDateString('en-us', { weekday: 'long' });
  let day = new Date().toLocaleDateString('en-us', { day: 'numeric' });
  let month = new Date().toLocaleDateString('en-us', { month: 'short' });

  return (
    <>
      <div
        className="app-form-container"
        style={{
          backgroundImage: `url(${top})`,
          backgroundRepeat: 'repeat',
          opacity: 0.9,
        }}
      >
        <p>
          {`${Today},`} <span>{`${day} ${month}`}</span>
        </p>
        <h1> ToDo List </h1>
      </div>
      <ToDoForm />
    </>
  );
};

const ToDoForm = () => {
  let [todos, setTodos] = useState([]);
  let [todoItem, setTodoItem] = useState('');

  const handleTodoItemChange = (e) => {
    todoItem = setTodoItem(e.target.value);
  };

  const handleSaveTodo = (e) => {
    e.preventDefault();

    if (todoItem) {
      let uniqueId =
        new Date().getTime().toString(36) + new Date().getUTCMilliseconds();

      let newTodoItem = {
        id: uniqueId,
        todo: todoItem,
        complete: false,
      };

      setTodos([newTodoItem, ...todos]);
      document.getElementById('error').innerHTML = '';
    } else {
      document.getElementById('error').innerHTML =
        '  You must fill in a Todo item ... ';
    }
    console.log(todos);
  };

  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...newTodos]);
  };

  const setComplete = (id) => {
    todos.find((todo) => {
      if (todo.id === id) {
        todo.complete = true;
      }
      return setTodos([...todos]);
    });
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="data-card-container">
        <div className="data-card">
          <form onSubmit={handleSaveTodo}>
            <input
              type="text"
              value={todoItem}
              id="todobox"
              onChange={handleTodoItemChange}
              placeholder="Type Todo here..."
            />

            <button type="submit" className="btn">
              Add Todo
            </button>

            <span id="error"></span>
          </form>
        </div>

        <div className="data-card">
          <h5>Created todos: {todos.length}</h5>
        </div>
      </div>

      <ToDoList
        todos={todos}
        deleteTodo={deleteTodo}
        setComplete={setComplete}
      />
    </>
  );
};

export default ToDo;
