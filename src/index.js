import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { UserProvider } from './contexts/user.context';
import { ProfileProvider } from './contexts/profile.context';
import { SearchProvider } from './contexts/search.context';


import './index.css';
import { ResultProvider } from './contexts/result.context';
import { ListProvider } from './contexts/list.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <UserProvider>
        <ProfileProvider>
          <ListProvider>
            <SearchProvider>
              <ResultProvider>
                <App />
              </ResultProvider>
            </SearchProvider>
          </ListProvider>
        </ProfileProvider>
      </UserProvider>
  </React.StrictMode>
);

