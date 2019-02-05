import React from 'react';
import style from './TodoList.css';

const TodoList = (props) => {
  const listElements = props.item.map(function(element) {
    return (
        <li onClick={() => {props.remove(element.id)}} key={element.id}>
          <i className={'fas fa-user-clock'}></i>
          {element.text}
        </li>)
  })
  return (
      <ul className={style.TodoList}>{listElements}</ul>
  )
}

export default TodoList;