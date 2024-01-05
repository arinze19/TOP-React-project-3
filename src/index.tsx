import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';

import './index.css';

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <QueryClientProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
);
