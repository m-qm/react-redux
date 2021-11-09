import React from 'react';
import { Link } from 'react-router-dom';
const ListItem = ({ item }) => {
  const { id, number_of_comments, stars, views } = item;
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{number_of_comments}</td>
      <td>{stars}</td>
      <td>{views}</td>
      <td>
        <button className="button-primary">Delete</button>
        <Link
          to={{
            pathname: `${item.id}`,
            state: { items: item }
          }}
        >
          Edit
        </Link>
      </td>
    </tr>
  );
};

export default ListItem;
