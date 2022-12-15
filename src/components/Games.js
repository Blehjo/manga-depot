import { Fragment, useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap/';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faDownload, faCommentAlt, faRetweet, faHeart } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';

import { unixConverter } from '../utils/date/Date';

const Games = () => {
  const [games, setGames] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function getGames() {
      await axios({
        url: process.env.REACT_APP_URL,
        method: 'POST',
        headers: {
            'x-api-key': process.env.REACT_APP_X_API_KEY,
        },
        mode: 'no-cors',
        data: `fields name, first_release_date, platforms.abbreviation, summary, storyline, rating, cover.image_id; sort rating desc; where rating >= 90; limit 72;`
      })
      .then(response => {
          setGames(response.data);
      })
      .catch(err => {
          setErrorMessage(err);
          console.error(errorMessage);
      });
      }
      getGames();
  }, [errorMessage]);

  return (
      <Row xs={1} sm={1} md={2} lg={3} xl={4} key={1}>
        {games?.map(({ cover, first_release_date, id, name, platforms, rating, summary }) => (
          <Col className="mb-5" key={id}>
            <Card className="bg-dark card-container h-100 mb-4" key={id}>
                {<Card.Img height='485' style={{ objectFit:'cover'}} variant="top" src={`https://images.igdb.com/igdb/image/upload/t_1080p/${cover?.image_id}.jpg`} />}
                <Card.ImgOverlay>
                    <FontAwesomeIcon className="icon" icon={faEye} />
                      <FontAwesomeIcon className="icon-item icon2" icon={faHeart} />
                      <FontAwesomeIcon className="icon-item" icon={faCommentAlt} />
                      <FontAwesomeIcon className="icon-item" icon={faRetweet} />
                    <Card.Text className="icon3"><FontAwesomeIcon className="" icon={faDownload} /></Card.Text>
                </Card.ImgOverlay>
                <Card.Body>
                  <Card.Text>{name}</Card.Text>
                  <Card.Text>{unixConverter(first_release_date)}</Card.Text>
                  <Card.Text>{rating !== undefined ? `Rating: ${Math.round(rating)}` : ''}</Card.Text>
                  <Card.Text>{`Platforms: ${platforms?.map((element) => (`\n${element.abbreviation}`))}`}</Card.Text>
                </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
  );
}

export default Games;