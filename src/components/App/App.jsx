import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import BooksPage from '../books/BooksPage';
import BookByID from '../books/BookbyID';

export default function App() {
  return <Router>
    <Switch>
      <Route exact path='/' component={BooksPage} />
      <Route path='/:id' component={BookByID} />
    </Switch>
  </Router>;
}
  
