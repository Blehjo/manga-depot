import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faRetweet, faHeart } from '@fortawesome/free-solid-svg-icons';
import { unixConverter } from "../../utils/Date";
import { Form, Button } from "react-bootstrap";
import { ResultContext } from '../../contexts/result.context';

const Search = () => {
    const [games, setGames] = useState([]);
    const [errorMessage, setErrorMessage] = useState([]);
    const [searchField, setSearchField] = useState('');
    const { results } = useContext(ResultContext);

    useEffect(() => {
        setGames(results);
    }, [results])

    const handleInputChange = (evt) => {
        evt.preventDefault();
        setSearchField(evt.target.value);
    };

    const handleClickEvent = async (evt) => {
        evt.preventDefault();

        axios({
            url: process.env.REACT_APP_URL,
            method: 'POST',
            headers: {
                'x-api-key': process.env.REACT_APP_X_API_KEY,
            },
            data: `fields name, platforms, rating, genres, release_dates, first_release_date, cover.image_id, age_ratings, summary; search "${searchField}"; limit 50;`
        })
        .then(response => {
            setGames(response.data);
        })
        .catch(err => {
            setErrorMessage(err);
            console.error(errorMessage);
        });
    };

    return (
        <>
            {games.length === 0 ? 
            <div className="queries-container">
                <Form onSubmit={handleClickEvent} className="d-flex">
                    <Form.Control
                        onChange={handleInputChange}
                        type="search"
                        placeholder="Search"
                        className="me-2 "
                        aria-label="Search"
                    />
                    <Button type="submit" variant="info">Search</Button>
                </Form>
            </div>
             : 
            <div className="query-container">
                <Row xs={1} sm={1} md={1} lg={2} xl={3} className="g-4 pt-3" key="groups">
                    {games?.map(({ id, name, platforms, rating, genres, first_release_date, cover, age_ratings, summary }) => (
                        <Col key={id}>
                            <Card className="groups mx-2 mb-5 bg-dark card-container" >
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
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            }
        </>
    )
}

export default Search;