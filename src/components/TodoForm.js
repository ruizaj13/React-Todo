import React from 'react';


class TodoForm extends React.Component {

    

    render(){



        return (
        
            <form >
                <input onChange={this.props.inputChange} value={this.props.textInput} type='text' placeholder='New Task'/>
                <button onClick={this.props.taskSubmit}>Add Task</button>
                <button onClick={this.props.taskClear}>Clear completed Tasks</button>
            </form>
        
        )
    }
}

export default TodoForm;