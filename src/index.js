import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from './contexts/user.context';
import { ProfileProvider } from './contexts/profile.context';
import { SearchProvider } from './contexts/search.context';
import { ResultProvider } from './contexts/result.context';
import { ListProvider } from './contexts/list.context';
import { AuthProvider } from './contexts/auth.context';
import { UserProfilesProvider } from './contexts/userprofiles.context';

import App from './App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';
import { GroupResultProvider } from './contexts/groupresult.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <AuthProvider>
        <ProfileProvider>
          <ListProvider>
            <SearchProvider>
              <ResultProvider>
                <GroupResultProvider>
                  <UserProfilesProvider>
                    <BrowserRouter>
                      <App />
                    </BrowserRouter>
                  </UserProfilesProvider>
                </GroupResultProvider>
              </ResultProvider>
            </SearchProvider>
          </ListProvider>
        </ProfileProvider>
      </AuthProvider>
    </UserProvider>
  </React.StrictMode>
);

