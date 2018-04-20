import React from 'react';
import ListItem from './ListItem/ListItem';

const list = (props) => {
    return (
        props.list.map((item, index) => {
            return <ListItem
                deleted={(index) => props.deleted(index)}
                key={item.id}
                text={item.text}/>
        })
    )

};

export default list;