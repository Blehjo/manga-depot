import { Fragment, useState, useEffect, useContext } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import SearchBar from './SearchBar';
import GameResults from './GameResults';

import { ResultContext } from '../contexts/result.context';

const GamesTab = () => {
    const { results } = useContext(ResultContext);
    const [games, setGames] = useState();
    
    useEffect(() => {
        const getGames = async () => {
            await axios.get(`/api/games/`, {
                mode: 'no cors'
            })
            .then((resp) => setGames(resp.data)); 
        }
        getGames();
    }, [])

    return (
        <Fragment>
                <Row>
                    <Col style={{ marginTop: '-4rem', marginBottom: '2rem'}}>
                        <SearchBar/>
                        <GameResults/>
                    </Col>
                </Row>
            {games?.length > 0 ? games?.map(({ id, media_location_url, written_text, created_date_time }) => (
                <Card key={id} style={{ color: 'white' }} className="bg-dark">
                    <Card.Img src={media_location_url}/>
                    <Card.Body>
                        <Card.Title>{written_text}</Card.Title>
                    </Card.Body>
                </Card>
            )) : (
                <Card style={{ color: 'white' }}className="bg-dark">
                    <Card.Title>"Stay tuned. Currently no games..."</Card.Title>
                </Card>
            )}
        </Fragment>
    );
}

export default GamesTab;