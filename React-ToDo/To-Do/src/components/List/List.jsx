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

  const deleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  
  const printTodos = () => {
    return todos.map((todo, index) => (
      <Card  deleteTodo={() => deleteTodo(index)} key={index} todo={todo}/>
    ));
  };

  const clearAll = () => {
    setTodos([]);
  };

  const resetAll = () => {
    setTodos([]);
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
      <ul className='list-container'>{printTodos()}</ul>
      {notification && <p className="todo-message">{notification}</p>}
      <article className='buttons'>
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