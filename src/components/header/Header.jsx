import React from 'react';
import { useCurrentUser } from '../../../hooks/AuthContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const currentUser = useCurrentUser();

  return (
    <>
      {currentUser
        ? <img src={currentUser.userImage} />
        : <Link to='/signup'>Sign Up to be a User!</Link>
      }      
    </>
  );
};

export default Header;
