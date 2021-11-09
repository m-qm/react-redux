import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ItemView = (_) => {
  const { state } = useLocation();
  console.log(state);

  return (
    <section className="ItemView">
      <h2>{state.items.id}</h2>
      <ul className="ItemDetails">
        <li>
          <strong>Id</strong>: {state.items.id}
        </li>
        <li>
          <strong>Number of comments</strong>: {state.items.number_of_comments}
        </li>
        <li>
          <strong>Stars</strong>: {state.items.stars}
        </li>
        <li>
          <strong>Views</strong>: {state.items.views}
        </li>
      </ul>
      <Link to="/">Back</Link>
    </section>
  );
};

export default ItemView;
