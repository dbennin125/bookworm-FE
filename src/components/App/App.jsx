import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import BooksPage from '../books/BooksPage';
import BookByID from '../books/BookbyID';
import SignUp from '../auth/SignUp';

export default function App() {
  return <Router>
    <Switch>
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/' component={BooksPage} />
      <Route path='/:id' component={BookByID} />
    </Switch>
  </Router>;
}
  
