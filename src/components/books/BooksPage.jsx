import React, { useEffect } from 'react';
import Books from './Books';
import { fetchBooks } from '../../../services/bookwormAPI';
import { useDispatch } from 'react-redux';
import { setBooks } from '../../actions/booksAction';


const BooksPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBooks()
      .then(books => {
        dispatch(setBooks(books));
      });
      
  }, []);

  return (
    <Books />
  );
};

export default BooksPage;
