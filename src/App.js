import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todos = [
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false,
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      todos: todos
    }
  }


  handleOnSubmit = name => {
    this.setState({
      todos:[...this.state.todos, {
        task: name, 
        id: Math.round(Math.random() * 24),
        completed: false,
      }]
    })
  }

  render() {
    return (
      <div>
        <h1>Enter Your Todos For the Day</h1>
        <TodoForm handleOnSubmit={this.handleOnSubmit}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;