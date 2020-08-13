import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../../../services/bookwormAPI';
import { useCurrentUser } from '../../../hooks/AuthContext';
import { createBookAction } from '../../actions/booksAction';



const CreateBook = () => {
  const dispatch = useDispatch();
  // const loggedInUser = useCurrentUser();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState(0);
  const [description, setDescription] = useState('');

  const submitHandle = event =>{
    event.preventDefault();
    createBook({
      title,
      author,
      pages,
      description,
    })
      .then(book => dispatch(createBookAction(book)));
  };

  
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
