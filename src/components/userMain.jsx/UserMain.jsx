import React, { useEffect, useState } from 'react';
import Books from '../books/Books';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../../../services/bookwormAPI';
import { setBooks } from '../../actions/booksAction';

const UserMainPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetchBooks(currentPage)
      .then(({ books, totalPages }) => {
        (!books); 
        dispatch(setBooks(books)),
        setTotalPages(totalPages);

      });
  }, [currentPage]);
  return (<div>
    <button disabled={currentPage <= 1} onClick={() => setCurrentPage(currentPage - 1)}>&lt;</button>
    <span>{currentPage} / {totalPages}</span>
    <button disabled={currentPage >= totalPages} onClick={() => setCurrentPage(currentPage + 1)}>&gt;</button>
    <Books />
  </div>
  );
};

export default UserMainPage;
