import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BookFill, HeartFill } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import unixConverter from '../../utils/Date';

function Body(props) {
  return (
    <>
    <Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-4 pt-3" key={1}>
      {props.results?.map((result) => (
        <Col className='' key={result.id}>
          <Card style={{ }} className="h-100" key={result.id}>
            {<Card.Img className='img-fluid' variant="top" src={`https://images.igdb.com/igdb/image/upload/t_1080p/${result.cover?.image_id}.jpg`} />}
            <Card.Body className=''>
              <Card.Title>
                <Card.Link className='card-info' href={`/${result.name}`}>
                  {result.name}
                </Card.Link>
              </Card.Title>
              <Card.Text>
                {unixConverter(result.first_release_date)}
              </Card.Text>
              <Card.Text>
                {result.rating !== undefined ? `Rating: ${Math.round(result.rating)}` : ''}
              </Card.Text>
              <Card.Text>
                {`Platforms: ${result.platforms?.map((element) => (`\n${element.abbreviation}`))}`}
              </Card.Text>
              <div className='collect'>
                <Button variant='dark'>
                  <BookFill className='m-2' color='rgb(97, 219, 251)' size={40}/>
                </Button>
                <Button variant='dark'>
                  <HeartFill className='m-2' color='rgb(97, 219, 251)' size={40}/>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  );
}

export default Body;