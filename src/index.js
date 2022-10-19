import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { UserProvider } from './contexts/user.context';
import { ProfileProvider } from './contexts/profile.context';


import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <UserProvider>
        <ProfileProvider>
          <App />
        </ProfileProvider>
      </UserProvider>
  </React.StrictMode>
);

