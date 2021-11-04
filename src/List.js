import React from 'react';

import ListItem from './ListItem';

const List = ({ items = [] }) => {
  console.log(items)
  return (
    <section className="List">
      {items.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </section>
  );
};

export default List;
