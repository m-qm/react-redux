import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "./store/actions.js";
import { useDispatch } from "react-redux";
import { deleteItem } from "./store/actions.js";

const endpoint = "http://localhost:8000/reports";

const ListItem = ({ item }) => {
  const { id, number_of_comments, stars, views } = item;
  const { data, loading, error } = useFetch(endpoint + "/" + item.id);
  const dispatch = useDispatch();
  // https://medium.com/@ralph1786/adding-and-removing-items-from-redux-store-6d1303ed32c6
  useEffect(
    () => {
      dispatch(deleteItem(id));
    },
    [id]
  );

  if (loading) {
    return (
      <tr>
        <td>Loading…</td>;
      </tr>
    );
  }
  if (error) {
    return (
      <tr>
        {" "}<td>Error fetching data</td>
      </tr>
    );
  } else {
    return (
      <tr key={id}>
        <td>
          {data.name}
        </td>
        <td>
          {id}
        </td>
        <td>
          {number_of_comments}
        </td>
        <td>
          {stars}
        </td>
        <td>
          {views}
        </td>
        <td>
          {views}
        </td>

        <td>
          <button className="button-primary">Delete</button>
          <Link
            to={{ pathname: `${item.id}`, state: { items: item, data: data } }}
          >
            Edit
          </Link>
        </td>
      </tr>
    );
  }
};

export default ListItem;
