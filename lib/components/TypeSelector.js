import React from 'react';
import TypeEntity from './TypeEntity';

const TypeSelector = (props) => (
  <div 
    className="dropdown-menu" 
    style={{display: 'block'}}
  >
    <h6 className="dropdown-header">Available fields</h6>
    {
      Object.values(props.types).map((type) =>
        <TypeEntity
          key={type.id}
          onClick={() => props.onAddSelectedType(type)}
          label = {type.id}
          disabled = {type.disabled}
        />
      )}
  </div>
);


export default TypeSelector;
