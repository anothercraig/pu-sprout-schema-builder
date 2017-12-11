import React from 'react';

const TypeSelector = (props) => (
  <div 
    className="dropdown-menu" 
    style={{display: 'block'}}
  >
    <h6 className="dropdown-header">Select field</h6>
    {
      Object.values(props.types).map((type) =>
        (<a 
          className="dropdown-item" 
          href="#" 
          key={type.id} 
          onClick={() => props.onAddSelectedType(type)}
        >{type.id}</a>)
      )}
  </div>
);


export default TypeSelector;
