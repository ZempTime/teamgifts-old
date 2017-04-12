import React from 'react';
import ListItem from './ListItem';

export default ({list}) => {
  return (
    <div>
      <p>{list.name}</p>
      <ul>
        {list.items.map((item) => {
          return(<ListItem key={item.id} item={item} />);
        })}
      </ul>
    </div>
  );
}
