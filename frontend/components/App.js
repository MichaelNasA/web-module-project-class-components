import React from 'react'
import TodoList from './TodoList';
import TodoForm from './TodoForm';


export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Walk The Dog',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Take out the Trash',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  handleClear = () =>{
    //1. setState
    //2. loop through all todos
    //3. remove all todos that have completed === true
    //4. save filtered todos to state
    
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo =>{
        return (todo.completed === false);
      })
    });
  }

  render() {
    const{ todos } =this.state;
    console.log(todos);

    return (
      <div>
        <h1>Todos</h1>

        <TodoList todos={todos}/>

        <TodoForm/>

        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}
