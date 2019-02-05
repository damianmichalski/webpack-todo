import React from 'react';
import style from './TodoList.css';

const TodoList = (props) => {
  let listElements = props.item.map(function(element) {
    return (
        <li onClick={() => {props.remove(element.id)}} key={element.id}>
          <i class="fas fa-user-clock"></i>
          {element.text}
        </li>)
  })
  return (
      <ul className={style.TodoList}>{listElements}</ul>
  )
}

export default TodoList;