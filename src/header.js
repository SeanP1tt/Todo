import React from 'react';

const Header = ({name, addTodo, onChange, deleteTodo, selectAll, allSelected}) => {
  return (
    <header>
    <input name="checkall" type="checkbox" onChange={(id) => {selectAll()}} checked={allSelected} />
    <input type='text' placeholder='List Name' value={name} onChange={(e)=> {onChange(e)}}/>
    <button onClick={() => {addTodo()}}><i className="fas fa-plus"></i></button>
    <button onClick={() => {deleteTodo()}}> <i className="fas fa-trash"></i></button>
    </header>
  )
}

export default Header;
