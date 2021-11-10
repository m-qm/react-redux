export const initialState = null;

export const reducer = (state, action) => {
  if (action.type === 'FETCHING') {
    return {
      result: null,
      loading: true,
      error: null
    };
  }

  if (action.type === 'RESPONSE_COMPLETE') {
    return {
      result: action.payload.result,
      loading: false,
      error: null
    };
  }

  if (action.type === 'ERROR') {
    return {
      result: null,
      loading: false,
      error: action.payload.error
    };
  }

  if (action.type === 'UPDATE_ITEM') {
    return state.items.map((item) => {
      if (state.items.id === action.payload.id) {
        return {
          ...item,
          ...action.payload
        };
      } else {
        return item;
      }
    });
  }

  if (action.type === 'DELETE_ITEM') {
    return state.items.filter(({ id }) => id !== action.payload.id);
  }

  return state;
};
