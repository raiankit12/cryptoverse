// Import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// Import your root component
import App from './App'; // Replace 'App' with the actual name and path of your root component
import '@ant-design/cssinjs';
import store from './app/store';

// Render the root component in the 'root' element of your HTML
ReactDOM.render(
    <Router>
      <Provider store = {store}>
            <React.StrictMode>
              <App />
           </React.StrictMode>
      </Provider>
        
    </Router>
 ,
  document.getElementById('root')
);
