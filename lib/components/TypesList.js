import React from 'react';
import TypeEntity from './TypeEntity';

export default (props) => (
  <div 
    className="dropdown-menu" 
    style={{display: 'block'}}
  >
    <h6 className="dropdown-header">{props.label}</h6>
    {
      Object.values(props.types).map((type) =>
        <TypeEntity
          key={type.id}
          onClick={() => props.onClick(type)}
          label = {type.id}
          disabled = {type.disabled}
        />)}
  </div>
);
