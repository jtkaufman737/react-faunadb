import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import faunadb from 'faunadb';

const db = new faunadb.Client({
  secret: process.env.REACT_APP_FAUNADB_SECRET, 
  domain: 'db.us.fauna.com',
});

ReactDOM.render(
  <React.StrictMode>
    <App 
      db={db}
      q={faunadb.query} 
    />
  </React.StrictMode>,
  document.getElementById('root')
);

 
