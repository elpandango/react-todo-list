import React from 'react';

const newItem = (props) => (
    <div>
        <input type="text" placeholder="Введите новую задачу" onChange={props.inputValue}/>
        <button onClick={props.clicked}>Send</button>
    </div>
);

export default newItem;