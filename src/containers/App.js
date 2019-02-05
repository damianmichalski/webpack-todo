import React from 'react';
import { hot } from 'react-hot-loader';
import uuid from 'uuid';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import style from './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          text: 'clean room'
        },
        {
          id: 2,
          text: 'wash the dishes'
        },
        {
          id: 3,
          text: 'feed my cat'
        }
      ]
    };
  }
  addTodo(val){
    const todo = {
      id: uuid.v4(),
      text: val
    };
    const data = [...this.state.data, todo];
    this.setState({data});
  }
  removeTodo = (id) => {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
  }
  render() {
    return (
        <div className={style.TodoApp}>
          <Title item={this.state.data}/>
          <TodoList item={this.state.data} remove={this.removeTodo}/>
        </div>
    );
  }
}

export default hot(module)(App);