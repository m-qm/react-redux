import React from 'react';

import { NavLink } from 'react-router-dom';

const ListItem = ({ item }) => {
  console.log(item);
  const { id, number_of_comments, stars, views } = item;
  return (
    <article className="ListItem">
      <NavLink className="ListItemLink" to={`${id}`}>
        <div>{id}</div>
        <div>{number_of_comments}</div>
        <div>{stars}</div>
        <div>{views}</div>
      </NavLink>
    </article>
  );
};

export default ListItem;
