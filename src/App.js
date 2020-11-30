import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const tasks = []

class App extends React.Component {
  
  constructor() {
    super();
    this.state={
      tasks,
      textInput: ''
    }
  }

  

  addTask = name => {
    this.setState({
      tasks: [...this.state.tasks, { name: name, id: Date.now(), purchased: false}]
    });
  }

  inputChange = event => {
    this.setState({
      textInput: event.target.value
    });
  };

  taskSubmit = event => {
    event.preventDefault();
    this.addTask(this.state.textInput);
    this.setState({
      textInput:''
    });
  }

  taskClear = event => {
    event.preventDefault();
    
  }




  render() {
    return (
      <div>
        <div>
          <h1>Todo App</h1>
          <TodoForm taskClear={this.taskClear} taskSubmit={this.taskSubmit} textInput={this.state.textInput} inputChange={this.inputChange}/>
        </div>
        <TodoList tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
