import React from 'react';
import './Card.css';

const Card = ({todo, deleteTodo}) => {
  return (
    <li className='item-container'> {todo}
        <button onClick={deleteTodo} className='dlt-item'>Delete</button>
    </li>
  )
   
};

export default Card;
