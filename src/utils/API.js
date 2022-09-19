import axios from 'axios';
import { useState } from 'react';

const token = (token) => {

  const options = {
    method: 'POST',
    url: `https://id.twitch.tv/oauth2/token?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_SECRET_KEY}&grant_type=client_credentials`,
  };

  if (token.length === 0) {
      axios.request(options)
        .then(function (response) {
          token = response.data.access_token;
          console.log(token);
      }).catch(function (error) {
          // setErrorMessage(error)
          console.error(error);
      });
  }

  return token;
};

// Export an object with a "search" method that searches the Giphy API for the passed query
export default token;