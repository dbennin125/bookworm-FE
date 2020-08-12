import React, { useState } from 'react';
import { useSignUp } from '../../../hooks/AuthContext';
import { useHistory } from 'react-router-dom';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userImage, setUserImage] = useState('');
  const history = useHistory();
  
  const signup = useSignUp();
  
  const handleChange = ({ target }) => {
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
    if(target.name === 'userImage') setUserImage(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  
    signup(email, password, userImage)
      .then(() => history.push('/main'));
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='email' 
        name='email'
        placeholder='Email' 
        value={email} 
        onChange={handleChange} />
      <input 
        type='password'
        name='password'
        placeholder='Password'
        value={password}
        onChange={handleChange}
      />
      <input 
        type='url'
        name='userImage'
        placeholder='User Image'
        value={userImage}
        onChange={handleChange}
      />
      
      <button>Sign Up!</button>
    </form>
  );
};



export default SignUp;
