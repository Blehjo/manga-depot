import { useState, useContext, useEffect, Fragment } from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faRetweet, faHeart } from '@fortawesome/free-solid-svg-icons';
import { unixConverter } from "../utils/date/Date";
import { ResultContext } from "../contexts/result.context";

const GameResults = () => {
    const [games, setGames] = useState([]);
    const { results } = useContext(ResultContext);

    useEffect(() => {
        setGames(results);
    }, [results])

    return (
        <Fragment>
            <Row xs={1} sm={1} md={1} lg={2} xl={3} className="g-4 pt-3" key="groups">
                {games?.map(({ id, name, platforms, rating, genres, first_release_date, cover, age_ratings, summary }) => (
                    <Col key={id}>
                        <Card key={rating} className="groups mx-2 mb-5 bg-dark card-container" >
                            <div className='card-container'>
                                <Card.Link className='card-info' href={`/games/${cover}`}>
                                    <Card.Img  style={{ objectFit:'cover'}} variant="top" src={`${cover ? `https://images.igdb.com/igdb/image/upload/t_1080p/${cover?.image_id}.jpg` : "https://www.museothyssen.org/sites/default/files/styles/full_resolution/public/imagen/2019-10/PICASSO%2C%20Pablo%20Ruiz_Corrida%20de%20toros_706%20%281976.83%29_FOTOH%20%23F21.jpg"}`} />
                                </Card.Link>
                                <Card.ImgOverlay>
                                    <Card.Text className="icon2">
                                        <FontAwesomeIcon className="icon-item" icon={faHeart} />
                                        <FontAwesomeIcon className="icon-item" icon={faCommentAlt} />
                                        <FontAwesomeIcon className="icon-item" icon={faRetweet} />
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </div>
                            <Card.Body className=''>
                                <Card.Text>{unixConverter(first_release_date)}</Card.Text>
                                {platforms?.map((platform) => (
                                    <Badge key={platform.abbreviation} pill bg="primary">
                                        {`${platform.abbreviation}`}
                                    </Badge>
                                ))}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Fragment>
    );
}

export default GameResults;