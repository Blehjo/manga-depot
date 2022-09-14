import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Body(props) {
  return (
    <>
    <Row xs={1} sm={2} md={3} className="g-4 pt-3" key={1}>
      {props.results.map((result) => (
        <Col className='' key={result.id}>
          <Card key={result.id}>
            <Card.Img className='img-fluid' variant="top" src={result.images.original.url} />
            <Card.Body>
              <Card.Title>{result.title}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  );
}

export default Body;