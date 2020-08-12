import React from 'react';
import { useCurrentUser, useLogOut } from '../../../hooks/AuthContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const logOut = useLogOut();
  const currentUser = useCurrentUser();
  const AuthLinks = () => (
    <>
      <Link to='/signup'>Sign Up to be a User!</Link>
      <Link to='/login'>Welcome Back!</Link>
    </>
  );

  return (
    <>
      {currentUser
        ? <> 
          <img src={currentUser.userImage} /><button onClick={logOut}>Logout?</button>
        </>
        : <AuthLinks/>
      }      
    </>
  );
};

export default Header;
