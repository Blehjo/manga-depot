import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faDownload, faCommentAlt, faRetweet, faHeart } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    function getUsers() {
        axios("http://localhost:3001/",
        {
            mode: 'no-cors',
        })
        .then((response) => setUsers(response.data));
    }

    useEffect(() => {
        getUsers();
    }, []);

    console.log(users);
    return (
        <>
            <h1>Dashboard</h1>
            <div>
                {Array.from(users)?.map((user) => (
                    <Card style={{ }} className="mx-2 bg-dark card-container" key={user.id}>
                    <div className='card-container'>
                    <Card.Link className='card-info' href={`/${user.userprofile.username}`}>
                    {<Card.Img height='485' style={{ objectFit:'cover'}} variant="top" src={`${user.media_location_url}`} />}
                    </Card.Link>
                    <Card.ImgOverlay>
                        <Card.Text>
                        <FontAwesomeIcon className="icon" icon={faEye} />
                        </Card.Text>
                        <Card.Text className="icon3">
                            <FontAwesomeIcon className="" icon={faDownload} />
                        </Card.Text>
                    </Card.ImgOverlay>
                    </div>
                    <Card.Body className=''>
                        <Card.Text>
                            {user.written_text}
                        </Card.Text>
                        <Card.Text>
                        {user.created_date_time}
                        </Card.Text>
                        <Card.Text className='icon2'>
                            <FontAwesomeIcon className="icon-item" icon={faHeart} />
                            <FontAwesomeIcon className="icon-item" icon={faCommentAlt} />
                            <FontAwesomeIcon className="icon-item" icon={faRetweet} />
                        </Card.Text>
                    </Card.Body>
                </Card>
                ))}
            </div>
        </>
    )
}

export default Dashboard;