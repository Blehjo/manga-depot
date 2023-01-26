import { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap/';

import axios from 'axios';

import { unixConverter } from '../utils/date/Date';

const Games = () => {
  const [games, setGames] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  return (
      <Row xs={1} md={2} lg={3} key={1}>
        {games?.map(({ cover, first_release_date, id, name, platforms, rating, summary }) => (
          <Col className="mb-5" key={id}>
            <Card className="bg-dark card-container h-100 mb-4" key={id}>
                {<Card.Img height='485' style={{ objectFit:'cover'}} variant="top" src={`https://images.igdb.com/igdb/image/upload/t_1080p/${cover?.image_id}.jpg`} />}
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