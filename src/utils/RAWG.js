import axios from 'axios';

const gameData = (value) => {

  axios({
    url: `https://5f5gh8905l.execute-api.us-west-2.amazonaws.com/production/v4/games`,
    method: 'POST',
    headers: {
        'x-api-key': process.env.REACT_APP_X_API_KEY,
    },
    data: `fields name, first_release_date, platforms, summary, storyline, rating; search "${value}";`
  })
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.error(err);
    });
};

export default gameData;