import React, { useEffect } from 'react';
import Books from '../books/Books';
import BookByID from '../books/BookbyID';
import CreateBook from '../books/CreateBook';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../../../services/bookwormAPI';
import { setBooks } from '../../actions/booksAction';




const UserMainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBooks()
      .then(books => dispatch(setBooks(books)));
  });
  return (<>

    <CreateBook />
    <Books />
    {/* <BookByID /> */}
  </>
  );
};

export default UserMainPage;
