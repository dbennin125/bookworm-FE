import React, { useState } from 'react';
import { AuthContext } from '../hooks/AuthContext';
import { fetchSignup, fetchLogin } from '../services/auth';


// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signup = (email, password, userImage) => {
    
    fetchSignup(email, password, userImage)
      .then(user => setCurrentUser(user));
  };

  const login = (email, password) => {
    return fetchLogin(email, password)
      .then(user => currentUser(user));
  };

  return (
    <AuthContext.Provider value={{ currentUser, signup, login }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;
