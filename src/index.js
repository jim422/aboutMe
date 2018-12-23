import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/index';
import App from './App';
/*global NODE_ENV*/
console.log(NODE_ENV, process.my_img_path);


ReactDOM.render(
	(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
	),
	document.getElementById('root'),
);
