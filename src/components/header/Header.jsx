import React from 'react';
import { useCurrentUser, useLogOut } from '../../../hooks/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
  const logOut = useLogOut();
  const currentUser = useCurrentUser();
  const history = useHistory();
  
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
          <img src={currentUser.userImage} /><button onClick={logOut}>Logout?</button><button onClick={() => history.push('/books')}>Main Page</button>
        </>
        : <AuthLinks/>
      }      
    </>
  );
};

export default Header;
