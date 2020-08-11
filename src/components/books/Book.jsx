import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <>
    <h3>{title}</h3>
    <h5>{author}</h5>
  </>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
