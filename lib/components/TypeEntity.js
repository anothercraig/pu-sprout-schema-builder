import React from 'react';

export default (props) => (
    <a href="#" 
        className={`dropdown-item ${props.disabled ? "disabled" : ""}`} 
        onClick={() => props.disabled ? null : props.onClick() }
    >{props.label}</a>
);