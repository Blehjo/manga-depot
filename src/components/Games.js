import { Fragment, useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap/';
import { unixConverter } from '../utils/date/Date';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faDownload, faCommentAlt, faRetweet, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const Games = () => {
  const [results, setResults] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function getGame() {
      await axios.post({
        url: process.env.REACT_APP_URL,
        method: 'POST',
        headers: {
            'x-api-key': process.env.REACT_APP_X_API_KEY,
        },
        mode: 'no-cors',
        data: `fields name, platforms.abbreviation, rating, genres, release_dates, first_release_date, cover.image_id, age_ratings, summary; limit 50;`
      })
      .then(response => {
        setResults(response.data);
      })
    }
  }, [])

  return (
    <Fragment>
      <Row key={1}>
          <Col key={id}>
            <Card className="bg-dark card-container h-100" key={id}>
              <Card.Link className='card-info' href={`/`}>
                {/* {<Card.Img height='485' style={{ objectFit:'cover'}} variant="top" src={`https://images.igdb.com/igdb/image/upload/t_1080p/${cover?.image_id}.jpg`} />} */}
              </Card.Link>
                <Card.ImgOverlay>
                  <Card.Text>
                    <FontAwesomeIcon className="icon" icon={faEye} />
                  </Card.Text>
                    <Card.Text className='icon2'>
                      <FontAwesomeIcon className="icon-item" icon={faHeart} />
                      <FontAwesomeIcon className="icon-item" icon={faCommentAlt} />
                      <FontAwesomeIcon className="icon-item" icon={faRetweet} />
                    </Card.Text>
                    <Card.Text className="icon3">
                      <FontAwesomeIcon className="" icon={faDownload} />
                    </Card.Text>
                </Card.ImgOverlay>
                <Card.Body>
                  <Card.Text>
                    {/* {unixConverter(first_release_date)} */}
                  </Card.Text>
                  <Card.Text>
                    {/* {rating !== undefined ? `Rating: ${Math.round(rating)}` : ''} */}
                  </Card.Text>
                  <Card.Text>
                    {/* {`Platforms: ${platforms?.map((element) => (`\n${element.abbreviation}`))}`} */}
                  </Card.Text>
                </Card.Body>
            </Card>
          </Col>
      </Row>
    </Fragment>
  );
}

export default Games;