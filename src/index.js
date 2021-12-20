import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
