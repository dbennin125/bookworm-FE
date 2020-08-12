import React from 'react';
import { useCurrentUser, useAuthLoading } from '../../../hooks/AuthContext';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = props => {
  const currentUser = useCurrentUser();
  const loading = useAuthLoading();
  
  if(loading) return null;
  if(!loading && !currentUser) return <Redirect to='/login' />;

  return <Route {...props} />;
};

export default PrivateRoute;
