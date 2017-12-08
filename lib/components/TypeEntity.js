import React from 'react';

const TypeEntity = (props) => (
  <li className="list-group-item">
    {props.label} &nbsp;
    <a href="#" onClick={props.onDeleteClick}>Remove</a>
  </li>);

export default TypeEntity;
