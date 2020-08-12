import React from 'react';
import { useCurrentUser } from '../../../hooks/AuthContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const currentUser = useCurrentUser();
  const AuthLinks = () => (
    <>
      <Link to='/signup'>Sign Up to be a User!</Link>
      <Link to='/Login'>Welcome Back!</Link>
    </>
  );
  return (
    <>
      {currentUser
        ? <img src={currentUser.userImage} />
        : <AuthLinks/>
      }      
    </>
  );
};

export default Header;
