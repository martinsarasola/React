import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Asegúrate de importar el Provider
import store from './components/store.js'; // Asegúrate de importar tu store de Redux
import App from './App.js';

ReactDOM.render(
  <Provider store={store}> {/* Envuelve tu aplicación con Provider y proporciona el store */}
    <App />
  </Provider>,
  document.getElementById('root')
);