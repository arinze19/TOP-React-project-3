import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

import './index.css';

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <QueryClientProvider client={client}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </QueryClientProvider>
);
