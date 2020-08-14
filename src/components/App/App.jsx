import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import BookByID from '../books/BookbyID';
import SignUp from '../auth/SignUp';
import Header from '../header/Header';
import Login from '../auth/Login';
import PrivateRoute from '../auth/PrivateRoute';
import UserMainPage from '../userMain.jsx/UserMain';
import CreateBook from '../books/CreateBook';

export default function App() {
  return <Router>
    <Header />
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={SignUp} />
      <PrivateRoute exact path='/books' component={UserMainPage} />
      <PrivateRoute exact path='/books/create' component={CreateBook}/>
      <PrivateRoute exact path='/books/:id' component={BookByID} />
    </Switch>
  </Router>;
}
  
