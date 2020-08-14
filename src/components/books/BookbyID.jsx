import React, { useEffect, useState } from 'react';
// import BookDetails from './BookDetails';
import { fetchByID, fetchDeleteBook, fetchPatchBook } from '../../../services/bookwormAPI';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { deleteBookAction } from '../../actions/booksAction';
import BookDetails from './BookDetails';



const BookByID = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [book, setBook] = useState('');
  const [newBook, setNewBook] = useState(null);
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchByID(id)
      .then(book => {
        return setBook(book);
      });
  }, [newBook]);

 
  const handleSubmit = event => {
    event.preventDefault();
    // if(
    //   !title,
    //   !pages,
    //   !description,
    //   !author
    // ) 
    //   return { ...book };
    fetchPatchBook(id, {
      title,
      author, 
      pages,
      description,
    })
      .then(book => setNewBook(book));
  };

  const handleClick = () => {
    dispatch(deleteBookAction(id));
    fetchDeleteBook(id)
      .then(() => history.push('/books'));
  };

  return (
    <>
      <section>
        <BookDetails {...book} />
      </section>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Title' value={title} name='title' onChange={({ target }) => setTitle(target.value)} />
        <input type='text' placeholder='Author' value={author} name='author' onChange={({ target }) => setAuthor(target.value)}/>
        <input type='number' placeholder='Amount of Pages' value={pages} name='pages' onChange={({ target }) => setPages(target.value)}/>
        <input type='text' placeholder='Description' value={description} name='description' onChange={({ target }) => setDescription(target.value)}/>
        <button disabled={!title + !pages + !description + !author}>Update a book!</button>
      </form>
      <button onClick={handleClick}>Delete?</button>
    </>

  );
};

export default BookByID;
