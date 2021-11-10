import { useReducer, useEffect } from 'react';
import axios from 'axios';

const ACTIONS = {
  API_REQUEST: 'api-request',
  FETCH_DATA: 'fetch-data',
  ERROR: 'error',
  UPDATE_ITEM: 'update',
  DELETE_ITEM: 'deleteItem'
};

const initialState = {
  data: [],
  loading: false,
  error: null
};

function reducer(state, { type, payload }, action) {
  switch (type) {
    case ACTIONS.API_REQUEST:
      return { ...state, data: [], loading: true };
    case ACTIONS.FETCH_DATA:
      return { ...state, data: payload, loading: false };
    case ACTIONS.ERROR:
      return { ...state, data: [], error: payload };
    case ACTIONS.DELETE_ITEM:
      // TODO IMPLEMENT ACTIONS
      console.log('hola');
      return {
        ...state,
        data: state.items.filter((item, index) => index !== action.payload)
      };
    case ACTIONS.UPDATE_ITEM:
      const current = state.data.find((item) => item.id === payload.id);
      console.log(current);
      current.item.name = payload.data.name;
      current.item.tags = payload.data.tags;
      current.item.stars = payload.data.stars;
      current.item.description = payload.data.description;
      state = {
        ...state,
        items: state.items.map((item) =>
          item.id === payload.id ? current : item
        )
      };
      return state;
    default:
      return state;
  }
}
export const deleteItem = (index) => ({
  type: ACTIONS.DELETE_ITEM,
  payload: index
});

export function useFetch(url) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: ACTIONS.API_REQUEST });
    axios
      .get(url)
      .then((res) => {
        dispatch({ type: ACTIONS.FETCH_DATA, payload: res.data });
      })
      .catch((e) => {
        dispatch({ type: ACTIONS.ERROR, payload: e.error });
      });
  }, [url]);
  return state;
}
export default useFetch;
