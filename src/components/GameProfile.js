import { Fragment, useEffect, useState } from "react";
import { Card, Badge, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { unixConverter } from "../utils/date/Date";
import { getGame } from "../utils/igdb/IGDB";


const GameProfile = () => {
    const [game, setGame] = useState([]);
    const [errorMessage, setErrorMessage] = useState([]);
    const { id, imageId } = useParams();

    useEffect(() => {
        getGame(id);
    }, []);

    return (
        <Fragment>
            <Row>
                <Col style={{ margin: 'auto' }} xl={4}>
                    {game?.map(({ name, cover, first_release_date, summary }) => (
                        <Card style={{ color: 'white' }}className="bg-dark">
                            <Card.Img src={`https://images.igdb.com/igdb/image/upload/t_1080p/${imageId}.jpg`} />
                            <Card.Body>
                                <Card.Subtitle>{summary}</Card.Subtitle>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Text>
                                    {unixConverter(first_release_date)}
                                </Card.Text>
                            </Card.Footer>
                        </Card>
                    ))}
                </Col>
            </Row>
        </Fragment>
    );
}

export default GameProfile;