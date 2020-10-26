import React from 'react';
import TodoForm from './components/TodoForm';

const todos = [
  {
    task: 'Bake Cookies',
    id: 1528817084358,
  },
  {
    task: 'Eat Cookies',
    id: 1298939239239,
  },
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

  render() {
    return (
      <div>
        <h1>Enter Your Todos For the Day</h1>
      </div>
    );
  }
}

export default App;