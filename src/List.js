import React from 'react';

import ListItem from './ListItem';

const List = ({ items = [] }) => {
  return (
    <div className="row">
      <table className="u-full-width">
        <thead>
          <tr>
            <th>ID</th>
            <th>Number of comments</th>
            <th>Stars</th>
            <th>Views</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items ? (
            items && items.map((item) => <ListItem key={item.id} item={item} />)
          ) : (
            <div className="no-items">No items</div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;
