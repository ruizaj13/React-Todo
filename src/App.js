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
      tasks: [...this.state.tasks, { name: name, id: Date.now(), selected: false}]
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
    this.setState({
      tasks: this.state.tasks.filter(item => (!item.selected))
    });
  }

  taskSelected = (itemId) => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (itemId === item.id) {
          return({
            ...item,
            selected: !item.selected
          });
        } else {
          return(item)
        }
      })
    })
  }


  render() {
    return (
      <div>
        <div>
          <h1>Todo App</h1>
          <TodoForm  taskSubmit={this.taskSubmit} textInput={this.state.textInput} inputChange={this.inputChange}/>
        </div>
        <TodoList taskClear={this.taskClear} taskSelected={this.taskSelected} tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
