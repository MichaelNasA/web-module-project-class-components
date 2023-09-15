import React from 'react';

export default class Todo extends React Componet{
  render(){
    cosnt {id, name, compleated} = this.props.Todo
    return(
      <div>
        {name}
      </div>
    )
  }
}