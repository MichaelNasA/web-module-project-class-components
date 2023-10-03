import React from 'react';

export default class Todo extends React.Componet{
  render(){
    const {id, name, compleated} = this.props.todo
    const {toggleCompetion} = this.props
    return(
      <div onClick={() => toggleCompetion(id)}>
        {name} {compleated && "^"}
      </div>
    )
  }
}