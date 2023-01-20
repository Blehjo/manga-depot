import { Fragment, useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import SearchBar from './SearchBar';
import GameResults from './GameResults';

const GamesTab = () => {
    const [games, setGames] = useState();
    
    useEffect(() => {
        const getGames = async () => {
            await axios.get(`https://shellgeistapi.herokuapp.com/api/games/`, {
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
            {games?.length > 0 ? games?.map(({ id, media_location_url, title }) => (
                <Card key={id} style={{ marginBottom: '2rem', color: 'white', textAlign: 'center' }} className="bg-dark">
                    <Card.Img src={media_location_url}/>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                    </Card.Body>
                </Card>
            )) : (
                <Card style={{ color: 'white', textAlign: 'center' }}className="bg-dark">
                    <Card.Title>"Stay tuned. Currently no games..."</Card.Title>
                </Card>
            )}
        </Fragment>
    );
}

export default GamesTab;