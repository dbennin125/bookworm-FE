import React, { useContext } from 'react';

export const AuthContext = React.createContext();

export const useCurrentUser = () => {
  const { currentUser } = useContext(AuthContext);
  return currentUser;
};

export const useSignUp = () => {
  const { signup } = useContext(AuthContext);
  return signup;
};
