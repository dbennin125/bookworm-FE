import { SET_BOOKS, CREATE_BOOK, DELETE_BOOK_ID } from '../actions/booksAction';

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
    case CREATE_BOOK:
      return { ...state, books: [...state.books, action.payload] };
    case DELETE_BOOK_ID: 
      return { ...state, books: state.books.filter(book => book._id !== action.payload) };
    default: 
      return state;
  }
};
