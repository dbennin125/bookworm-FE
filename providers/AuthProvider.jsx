import React, { useState } from 'react';
import { AuthContext } from '../hooks/AuthContext';
import { fetchSignup } from '../services/auth';


// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signup = (email, password, userImage) => {
    
    fetchSignup(email, password, userImage)
      .then(user => setCurrentUser(user));
  };

  return (
    <AuthContext.Provider value={{ currentUser, signup }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;
