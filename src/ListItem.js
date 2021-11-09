import React from 'react';

import { NavLink } from 'react-router-dom';

const ListItem = ({ item }) => {
  console.log(item);
  const { id, number_of_comments, stars, views } = item;
  return (
    <div className="row">
      <tr>
        <td>1</td>
        <td>Dave Gamache</td>
        <td>dave@gmail.com</td>
        <NavLink className="ListItemLink" to={`${id}`}>
          <td>{id}</td>
          <td>{number_of_comments}</td>
          <td>{stars}</td>
          <td>{views}</td>
        </NavLink>
        <td>
          <button>Delete</button>
          <button>Edit</button>
        </td>
      </tr>
    </div>
  );
};

export default ListItem;
