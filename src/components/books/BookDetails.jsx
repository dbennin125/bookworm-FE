import React from 'react';
import { useSelector } from 'react-redux';
import { getByID } from '../../../selectors/bookSelectors';


const BookDetails = ()  => {
  const detailedBook = useSelector(getByID);
  
  return (
    <>
      <h1>{detailedBook.title}</h1>
      <h3>{detailedBook.author}</h3>
      <p>{detailedBook.description} - {detailedBook.pages}</p>
    </>
  );
};



export default BookDetails;
