export const SET_BOOKS = 'SET_BOOKS';
export const setBooks = books => ({
  type: SET_BOOKS, 
  payload: books
});

// export const SET_BOOKBYID = 'SET_BOOKBYID';
// export const setByID = book => ({
//   type: SET_BOOKBYID, 
//   payload: book
// });

export const DELETE_BOOK_ID = 'DELETE_BOOK';
export const deleteBookAction = id => ({
  type: DELETE_BOOK_ID,
  payload: id
});

export const CREATE_BOOK = 'CREATE_BOOK';
export const createBookAction = book => ({
  type: CREATE_BOOK,
  payload: book
});


