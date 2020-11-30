import React from 'react';

const Item = props => {
   
    const handleClick = () => {
        props.taskSelected(props.item.id)
    }

    return(
        <div onClick={handleClick} >
            <p>{props.item.name}</p>
        </div>
    )
}


export default Item