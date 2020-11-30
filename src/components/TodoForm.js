import React from 'react';


class TodoForm extends React.Component {

    

    render(){



        return (
        
            <form onSubmit={this.props.taskSubmit}>
                <input onChange={this.props.inputChange} value={this.props.textInput} type='text' placeholder='New Task'/>
                <button>Add Task</button>
                
            </form>
        
        )
        
    }
    
}


export default TodoForm;