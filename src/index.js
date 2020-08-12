import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import store from './store';
import AuthProvider from '../providers/AuthProvider';

render(
  <AuthProvider >
    <Provider store={store}>
      <App />
    </Provider>
  </AuthProvider>,
  document.getElementById('root')
);
