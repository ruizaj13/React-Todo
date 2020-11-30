import React from 'react';
import Item from './Todo'


const TodoList = props => {
 
    return(
        <div>
            {props.tasks.map(item => (
                <Item key={item.id} item={item}/>
            ))}
        </div>
    )
    
}
export default TodoList;