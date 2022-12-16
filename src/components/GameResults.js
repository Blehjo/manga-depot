import { useState, useContext, useEffect } from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";
import { unixConverter } from "../utils/date/Date";
import { ResultContext } from "../contexts/result.context";
import { useNavigate } from "react-router";
import axios from "axios";

const GameResults = () => {
    const [games, setGames] = useState([]);
    const [errorMessage, setErrorMessage] = useState([]);
    const { results } = useContext(ResultContext);
    const navigate = useNavigate();

    useEffect(() => {
        setGames(results);
    }, [results])

    function handleClickEvent(event) {
        event.preventDefault();
        navigate(`/games/${event.target.id}/${event.target.className}`);
    }

    function addToCatalogue(event) {
        event.preventDefault();
        async function getInfo() {
            await axios.post('/api/games/', {
                title: event.target.className,
                media_location_url: `https://images.igdb.com/igdb/image/upload/t_1080p/${event.target.id}.jpg`
            })
            .catch(err => {
                setErrorMessage(err);
                console.error(errorMessage);
            });
        }
        getInfo();
        console.log(event.target.className);
    }

    return (
        <Row xs={1} sm={1} md={1} lg={2} xl={3} className="g-4 pt-3" key="groups">
            {games?.map(({ id, name, platforms, first_release_date, cover, age_ratings, summary }) => (
                <Col key={cover?.image_id}>
                    <Card key={cover?.image_id} className="groups mx-2 mb-5 bg-dark card-container" >
                            <Card.Img key={age_ratings} style={{ objectFit:'cover'}} variant="top" src={`${cover ? `https://images.igdb.com/igdb/image/upload/t_1080p/${cover?.image_id}.jpg` : "https://www.museothyssen.org/sites/default/files/styles/full_resolution/public/imagen/2019-10/PICASSO%2C%20Pablo%20Ruiz_Corrida%20de%20toros_706%20%281976.83%29_FOTOH%20%23F21.jpg"}`} />
                            <Card.ImgOverlay>
                                <Card.Text  id={cover?.image_id} onClick={addToCatalogue} className={name} key={first_release_date}>
                                    Add
                                </Card.Text>
                                <Card.Text>
                                    Post
                                </Card.Text>
                                <Card.Text id={id} className={cover?.image_id} onClick={handleClickEvent}>
                                    Look
                                </Card.Text>
                            </Card.ImgOverlay>
                        <Card.Body className=''>
                            <Card.Text key={first_release_date} >{unixConverter(first_release_date)}</Card.Text>
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
    );
}

export default GameResults;