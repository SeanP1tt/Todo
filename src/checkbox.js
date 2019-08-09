import React from 'react';

const Checkbox = ({identifier, status, onClick}) => {
return (
<input name="status" type="checkbox" onChange={(id) => {onClick(identifier)}} checked={status} />
)
}

export default Checkbox;
