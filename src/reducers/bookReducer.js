import { SET_BOOKS } from '../actions/booksAction';

export const initialState = {
  loading: false,
  bookByID: {},
  books: [],
};

export const reducer = (state, action) =>  {
  switch(action.type) {
    case SET_BOOKS: 
      return {  ...state, books: action.payload
      };
    default: 
      return state;
  }
};
