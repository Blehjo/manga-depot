import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { UserProvider } from './contexts/user.context';
import { ProfileProvider } from './contexts/profile.context';
import { SearchProvider } from './contexts/search.context';


import './index.css';
import { ResultProvider } from './contexts/result.context';
import { ListProvider } from './contexts/list.context';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <UserProvider>
        <ProfileProvider>
          <ListProvider>
            <SearchProvider>
              <ResultProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </ResultProvider>
            </SearchProvider>
          </ListProvider>
        </ProfileProvider>
      </UserProvider>
  </React.StrictMode>
);

