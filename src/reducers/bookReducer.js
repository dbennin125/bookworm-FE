import { SET_BOOKS, SET_BOOKBYID } from '../actions/booksAction';

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
    case SET_BOOKBYID:
      return { ...state, bookByID: action.payload };
    default: 
      return state;
  }
};
