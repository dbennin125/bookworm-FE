export const SET_BOOKS = 'SET_BOOKS';
export const setBooks = books => ({
  type: SET_BOOKS, 
  payload: books
});

export const SET_BOOKBYID = 'SET_BOOKBYID';
export const setByID = book => ({
  type: SET_BOOKBYID, 
  payload: book
});
