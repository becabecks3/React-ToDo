import React, { useState } from 'react';
import './List.css';
import Card from './Card';

const List = () => {
  const [todos, setTodos] = useState([]);
  const [notification, setNotification] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = e.target.todo.value;

    if (todo.length < 6) {
      setNotification('Must be longer than 6 characters');
    } else {
      setTodos((prevTodos) => [...prevTodos, todo]);
      setNotification('To-do added successfully!');
    }

    e.target.todo.value = '';
  };

  const deleteTodo = (deletedTodo) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo !== deletedTodo));
  };

  const printTodos = () => {
    return todos.map((todo, index) => (
      <Card deleteTodo={() => deleteTodo(todo)} key={index} todo={todo} />
    ));
  };

  const clearAll = () => {
    setTodos([]);
  };

  const resetAll = () => {
    setTodos([]);
    setNotification(null);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">What's pending?</label>
        <input placeholder="Ex: Wash dishes" type="text" name="todo" />
        <button className="addbtn" type="submit">
          Add
        </button>
      </form>
      <ul className="list-container">{printTodos()}</ul>
      {notification && <p>{notification}</p>}
      <article className="buttons">
        <button className="reset" onClick={resetAll}>
          Reset
        </button>
        <button className="clear" onClick={clearAll}>
          Clear
        </button>
      </article>
    </section>
  );
};

export default List;