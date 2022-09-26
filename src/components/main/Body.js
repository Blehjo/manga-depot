import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Heart, BookFill } from 'react-bootstrap-icons';

function Body(props) {
  if (props === undefined) 
  return (
    <>
    <Row xs={1} sm={2} md={3} className="g-4 pt-3" key={1}>
      {props.results.map((result) => (
        <Col className='' key={result._id}>
          <Card key={result._id}>
            <Card.Img className='img-fluid' variant="top" src={result.image} />
            <Card.Body>
              <Card.Title>{result.title}</Card.Title>
              <Card.Text>
                {result.synopsis}
              </Card.Text>
              <BookFill className='m-2' color='maroon' size={40}/>
              <Heart className='m-2' color='maroon' size={40}/>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  );
}

export default Body;