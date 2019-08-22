import React from 'react';

const Settings = ({toggleSettings, presets}) => {
return (
  <div className='settings'>
  <h1> Todo List Settings </h1>
  <p> Select your color preset: </p>
  {console.log(presets)}
  <button>Preset 1</button>
  <button>Preset 2</button>
  <button>Preset 3</button>
  <button>Preset 4</button>
  <button>Preset 5</button>
  </div>
)
}

export default Settings
