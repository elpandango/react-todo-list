import React from 'react';

const listItem = (props) => (
    <div>
        {props.text}
        &nbsp;
        &nbsp;
        <button onClick={props.deleted}>Delete Item</button>
    </div>
);

export default listItem;