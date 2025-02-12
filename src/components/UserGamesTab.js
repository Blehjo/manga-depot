import { Fragment, useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router';

const UserGamesTab = () => {
    const [games, setGames] = useState();
    const { id } = useParams();
    
    useEffect(() => {
        const getGames = async () => {
            await axios({
                method: 'get',
                url: `https://shellgeistapi.herokuapp.com/games/${id}`, 
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            .then((resp) => setGames(resp.data)); 
        }
        getGames();
    }, [])

    return (
        <Fragment>
            {games?.length > 0 ? games?.map(({ id, media_location_url, title }) => (
                <Card key={id} style={{ color: 'white', textAlign: 'center', marginBottom: '1rem' }} className="bg-dark">
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

export default UserGamesTab;