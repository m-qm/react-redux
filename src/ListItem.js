import React from 'react';

const ListItem = ({ item }) => {
  console.log(item);
  const { id, number_of_comments, stars, views } = item;
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{number_of_comments}</td>
      <td>{stars}</td>
      <td>{views}</td>
      <td>
        <button className="button-primary">Delete</button>
        <button>Edit</button>
      </td>
    </tr>
  );
};

export default ListItem;
