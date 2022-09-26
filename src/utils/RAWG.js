import axios from 'axios';

// import { useState } from 'react';

const gameData = () => {

  const options = axios({
    url: `https://u1o3w9sxzg.execute-api.us-west-2.amazonaws.com/production/v4/games`,
    method: 'POST',
    headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
    },
    data: `fields *; search ${'halo'};`
  });

//   console.log(options)

  return options;
};

// Export an object with a "search" method that searches the Giphy API for the passed query
export default gameData;