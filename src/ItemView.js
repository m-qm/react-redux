import React from 'react';

const ItemView = ({ item = {} }) => {
  console.log(item, 'item');
  return (
    <section className="ItemView">
      <h2>{item.id}</h2>
      <ul className="ItemDetails">
        <li>
          <strong>Id</strong>: {item.id}
        </li>
        <li>
          <strong>Number of comments</strong>: {item.number_of_comments}
        </li>
        <li>
          <strong>Stars</strong>: {item.stars}
        </li>
        <li>
          <strong>Views</strong>: {item.views}
        </li>

      </ul>
    </section>
  );
};

export default ItemView;
