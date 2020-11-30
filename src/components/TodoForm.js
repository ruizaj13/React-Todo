import React from 'react';


class TodoForm extends React.Component {

    render(){
        return (
            <div>
                <input type='text' placeholder='New Task'/>
                <button>Add New Task</button>
                <button>Clear completed Tasks</button>
            </div>
        )
    }
}

export default TodoForm;