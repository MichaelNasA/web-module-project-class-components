import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component{
  render(){
    const { todos, toggleCompetion } = this.props
    return(
      <div>
        {
          todos.maps(todo =>(<Todo key={todo.id} todo={todo} toggleCompetion={toggleCompetion}/>))
        }
      </div>
    )
  }

}