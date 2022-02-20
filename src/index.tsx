import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './components';
import { AuthProvider } from './services/auth.context';
import { store } from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
