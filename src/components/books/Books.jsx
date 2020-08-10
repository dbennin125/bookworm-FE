import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import { getBooks } from '../../../selectors/bookSelectors';


const Books = () => {
  const books = useSelector(getBooks);

  const bookElement = books.map(book => (
    <li key={book.id}>
      <Book { ...book} />
    </li>
  ));
  return (
    <ul>
      {bookElement}      
    </ul>
  );
};



export default Books;
