import React from 'react';
import { useAuthError } from '../../../hooks/AuthContext';

const AuthError = () => {
  const authError = useAuthError();
  if(!authError) return null;

  return (
    <>
      { authError.message }
    </>
  );
};

export default AuthError;
