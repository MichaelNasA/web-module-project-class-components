import React from 'react'
import TodoList from './TodoList';
import TodoForm from './TodoForm';

let id = 0
let getId = () => ++id

const initialTodos = [
  {id: getId(), name: 'Walk the Dog', completed: false},
  {id: getId(), name: 'Learn React', completed: false},
  {id: getId(), name: 'Have Fun', completed: false},
]

export default class App extends React.Component {
  state = {
    todos: initialTodos
  }

  addTodo = (name) => {
    this.setState({
      ...this.state,
      todos:this.state.todos.concat({id:getId(), completed: false, name})
    })
  }

  toggleCompetion = id => {
    this.setState({
      ...this.state,
      todos: this.state.todos.maps(td => {
        if( id== td.id) return {...td, completed: ! td.completed}
        return td;
      })
    })
  }

  render(){
    return(
      <div>
        <TodoList todos={this.state.todos} toggleCompetion={this.toggleCompetion}/>
        <TodoForm addTodo={this.addTodo}/>
      </div>
    )
  }
}