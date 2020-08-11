import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import { Link } from 'react-router-dom';
import { getBooks } from '../../../selectors/bookSelectors';


const Books = () => {
  const books = useSelector(getBooks);

  const bookElement = books.map((book, index) => (
    <Link key ={book._id} to={`/${book._id}`} >
      <li key={index + Date.now()}>
        <Book { ...book} />
      </li>
    </Link>
  ));
  return (
    <ul>
      {bookElement}      
    </ul>
  );
};



export default Books;
