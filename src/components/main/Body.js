import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Heart, BookFill } from 'react-bootstrap-icons';

function Body(props) {
  return (
    <>
    <Row xs={1} sm={2} md={4} className="g-4 pt-3" key={1}>
      {props.results.map((result) => (
        <Col className='' key={result.id}>
          <Card key={result.id}>
            <Card.Img className='img-fluid' variant="top" src={`https://images.igdb.com/igdb/image/upload/t_1080p/${result.cover.image_id}.jpg`} />
            <Card.Body>
              <Card.Title>{result.name}</Card.Title>
              <Card.Text>
                {result.first_release_date}
                {result.platforms}
                {result.rating}
                {/* {result.storyline} */}
              </Card.Text>
              <BookFill className='m-2' color='rgb(97, 219, 251)' size={40}/>
              <Heart className='m-2' color='rgb(97, 219, 251)' size={40}/>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  );
}

export default Body;