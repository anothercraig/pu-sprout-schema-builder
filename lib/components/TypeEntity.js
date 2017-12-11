import React from 'react';

const TypeEntity = (props) => (
    <a href="#" 
        className={`dropdown-item ${props.disabled ? "disabled" : ""}`} 
        onClick={() => props.disabled ? null : props.onClick() }
    >{props.label}</a>);

export default TypeEntity;
