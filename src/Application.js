import React, { useReducer, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import List from './List';

import './index.scss';

const endpoint = 'http://localhost:3000';

const fetchReducer = (state, action) => {
  if (action.type === 'FETCHING') {
    return {
      items: [],
      loading: true,
      error: null
    };
  }

  if (action.type === 'RESPONSE_COMPLETE') {
    return {
      items: action.payload,
      loading: false,
      error: null
    };
  }

  if (action.type === 'ERROR') {
    return {
      items: [],
      loading: false,
      error: action.payload.error
    };
  }

  return state;
};

const initialState = {
  error: null,
  loading: false,
  items: []
};

const useFetch = (url) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'LOADING' });

    const fetchUrl = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: 'RESPONSE_COMPLETE', payload: { response: data } });
      } catch (error) {
        dispatch({ type: 'ERROR', payload: { error } });
      }
    };

    fetchUrl();
  }, [url]);
  console.log(state);
  return [state.items, state.loading, state.error];
};

const Application = () => {
  const [state, loading, error] = useFetch(endpoint + '/social');
  const data = state && state.response;
  console.log(data);
  return (
    <div className="Application">
      <header>
        <h1>Tests</h1>
      </header>
      <div className="container">
        <div className="row">
          {' '}
          {loading ? <p>Loading…</p> : <List items={data} />}
          {error && <p className="error">{error.message}</p>}
        </div>{' '}
      </div>{' '}
    </div>
  );
};

export default Application;
