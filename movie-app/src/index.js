import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';

import App from './App';
import { store } from './features/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
