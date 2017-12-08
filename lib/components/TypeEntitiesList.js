import React from 'react';
import TypeEntity from './TypeEntity';

const TypeEntitiesList = (props) => (
  <ul className="list-group">{
    Object.values(props.types).map((type) =>
      <TypeEntity
        key={type.id}
        onDeleteClick={() => props.onDeleteSelectedType(type.id)}
        label = {type.id}
      />)}
  </ul>
);

export default TypeEntitiesList;
