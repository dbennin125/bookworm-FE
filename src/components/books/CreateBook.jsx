import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../../../services/bookwormAPI';
import { createBookAction } from '../../actions/booksAction';
import { useHistory } from 'react-router-dom';



const CreateBook = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState(0);
  const [description, setDescription] = useState('');
  const [addedBook, setAddedBook] = useState(false);

  const submitHandle = event =>{
    event.preventDefault();
    setAddedBook(false);
    createBook({
      title,
      author,
      pages,
      description,
    
    })
      .then(book => dispatch(createBookAction(book)))
      .then(setAddedBook(true))
      .then(setTimeout(() => {
        history.push('/books');
      }, 3000));
  };
  // eslint-disable-next-line react/no-unescaped-entities
  if(addedBook) return <><h1>Great add! We're going to add that book to you're list and rerouting you.</h1></>;
  return (
    <section>
      <form onSubmit={submitHandle}>
        <input type='text' placeholder='Title' value={title} name='title' onChange={({ target }) => setTitle(target.value)} />
        <input type='text' placeholder='Author' value={author} name='author' onChange={({ target }) => setAuthor(target.value)}/>
        <input type='number' min='1' placeholder='Amount of Pages' value={pages} name='pages' onChange={({ target }) => setPages(target.value)}/>
        <input type='text' placeholder='Description' value={description} name='description' onChange={({ target }) => setDescription(target.value)}/>
        <button>Add a Book!</button>
      </form>
    </section>
  );
};



export default CreateBook;
