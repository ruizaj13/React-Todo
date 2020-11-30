import React from 'react';
import Item from './Todo'


const TodoList = props => {
    return(
        <div>
            {props.tasks.map(item => (
                <Item key={item.id} item={item} taskSelected={props.taskSelected} />
                
            ))}
            <button onClick={props.taskClear}>Clear completed Tasks</button>
        </div>
    )
    
}
export default TodoList;