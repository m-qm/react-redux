import React from 'react';

import ListItem from './ListItem';

const List = ({ items }) => {
  console.log(items)
  return (
    <section className="List">
      {items ? items.map(item => (
        <ListItem key={item.id} item={item} />
      )) : <div>No items</div>}
    </section>
  );
};

export default List;
