import React from 'react';

const Settings = ({toggleSettings, presets, options}) => {
return (
  <div className='settings'>
  <h1> Todo List Settings </h1>
  <p> Select your color preset: </p>
  {presets.map((item, index) => (
    <button value={item.name} key={index}>{item.name}</button>
  ))}
  <br/>
  <p> Sort your list by: </p>
  <select>
  {options.map((item, index) => (
    <option key={index} value={item}>{item}</option>
  ))}
  </select>
  </div>
)
}

export default Settings
