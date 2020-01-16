import React from 'react';

// let futureImprovement=(  <br/>
//   <p> Sort your list by: </p>
//   <select>
//   {options.map((item, index) => (
// <option key={index} value={item} >{item} </option>
//   ))}
//   </select>)

const Settings = ({toggleSettings, presets, options, onClick}) => {
return (
  <div className='settings'>
  <h1> Todo List Settings </h1>
  <p> Select your color preset: </p>
  {presets.map((item, index) => (
    <button value={item.id} key={index} onClick={onClick}>{item.name}</button>
  ))}
  </div>
)
}

export default Settings
