import React from 'react';
import TypeEntity from './TypeEntity';

const TypeEntitiesList = (props) => (
  <div 
    className="dropdown-menu" 
    style={{display: 'block'}}
  >
    <h6 className="dropdown-header">Selected field</h6>
    {
      Object.values(props.types).map((type) =>
        <TypeEntity
          key={type.id}
          onClick={() => props.onDeleteSelectedType(type.id)}
          label = {type.id}
        />)}
  </div>
);

export default TypeEntitiesList;
