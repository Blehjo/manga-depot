import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import unixConverter from '../../utils/Date';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faDownload, faCommentAlt, faRetweet, faHeart } from '@fortawesome/free-solid-svg-icons';



function Games({ results }) {
  return (
    <>
    <Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-4 pt-3" key={1}>
      {results?.map((result) => (
        <Col className='' key={result.id}>
          <Card className="bg-dark card-container h-100" key={result.id}>
            <div className='card-container'>
            <Card.Link className='card-info' href={`/${result.name}`}>
              {<Card.Img height='485' style={{ objectFit:'cover'}} variant="top" src={`https://images.igdb.com/igdb/image/upload/t_1080p/${result.cover?.image_id}.jpg`} />}
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
              </div>
              <Card.Body className=''>
                <Card.Text>
                  {unixConverter(result.first_release_date)}
                </Card.Text>
                <Card.Text>
                  {result.rating !== undefined ? `Rating: ${Math.round(result.rating)}` : ''}
                </Card.Text>
                <Card.Text>
                  {`Platforms: ${result.platforms?.map((element) => (`\n${element.abbreviation}`))}`}
                </Card.Text>
              </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  );
}

export default Games;