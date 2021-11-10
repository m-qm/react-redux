import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NotFound from './pages/NotFound';

import update from './store/actions.js';

import { useDispatch } from 'react-redux';

const ItemView = (_) => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const editingItem = state.items;
    const editingItemId = state.items.id;
    editingItem.id = inputValue;
    console.log(inputValue);
    dispatch(update(editingItemId, editingItem));
    setInputValue('');
  };
  // setEditingTaskIndex(null);

  return (
    <section className="ItemView">
      {state && state.items ? (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h2>{state.items.id}</h2>
            <ul className="ItemDetails">
              <input
                type="text"
                value={inputValue}
                placeholder={state.items.id}
                onChange={handleChange}
              />
              <li>
                <strong>Id</strong>: {state.items.id}
              </li>
              <input
                type="text"
                value={state.items.number_of_comments}
                placeholder="e.g: homework"
                onChange={handleChange}
              />
              <li>
                <strong>Number of comments</strong>:{' '}
                {state.items.number_of_comments}
              </li>
              <input
                type="text"
                value={state.items.stars}
                placeholder="e.g: homework"
                onChange={handleChange}
              />
              <li>
                <strong>Stars</strong>: {state.items.stars}
              </li>
              <input
                type="text"
                value={state.items.views}
                placeholder="e.g: homework"
                onChange={handleChange}
              />
              <li>
                <strong>Views</strong>: {state.items.views}
              </li>
            </ul>
            <Link to="/">Back</Link>
          </form>
          <button onClick={handleSubmit} className="btn btn-success">
            Submit
          </button>{' '}
        </div>
      ) : (
        <NotFound />
      )}
    </section>
  );
};

export default ItemView;
