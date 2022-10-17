import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloProvider,
} from "@apollo/client";

import './index.css';
import App from './App';
import { client } from './api';

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);
