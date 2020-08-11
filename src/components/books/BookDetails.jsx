import React from 'react';
import { useSelector } from 'react-redux';
import { getByID } from '../../../selectors/bookSelectors';


const BookDetails = ()  => {
  const detailedBook = useSelector(getByID);
  
  return (
    <>
      <h1>Book Title: {detailedBook.title}</h1>
      <h3>Author: {detailedBook.author}</h3>
      <p>Description: {detailedBook.description} Page amount: {detailedBook.pages}</p>
    </>
  );
};



export default BookDetails;
