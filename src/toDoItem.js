import React from 'react';

const TodoItem = ({identifier, title, description, onChange, onUpdate, status, onClick}) => {
  if(status ===true){
    return (<div>

    <input type='text' value={title} onChange={(e,id)=> {onChange(e,id)}} placeholder='Title' style={{textDecoration: 'line-through'}}/>
    <textarea value={description} onChange={(e,id)=> {onUpdate(e,identifier)}} placeholder='Description' rows='4' cols='50' style={{textDecoration: 'line-through'}}/>
    </div>)
  } else {
    return (<div>

    <input type='text' value={title} onChange={(e,id)=> {onChange(e,id)}} placeholder='Title'/>
    <textarea value={description} onChange={(e,id)=> {onUpdate(e,identifier)}} placeholder='Description' rows='4' cols='50'/>
    </div>)
  }

}

export default TodoItem;
