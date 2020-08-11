import React, { useEffect } from 'react';
import BookDetails from './BookDetails';
import { fetchByID } from '../../../services/bookwormAPI';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setByID } from '../../actions/booksAction';

const BookByID = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchByID(id)
      .then(book => {
        dispatch(setByID(book));
      });
  }, [id]);

  return (
    <BookDetails />
  );
};

export default BookByID;
