import React from 'react';

import ListItem from './ListItem';

const List = ({ items = [] }) => {
  console.log(items);
  return (
    <div className="row">
      <table class="u-full-width">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {items ? (
              items &&
              items.map((item) => <ListItem key={item.id} item={item} />)
            ) : (
              <div className="no-items">No items</div>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default List;
