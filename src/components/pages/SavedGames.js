import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCommentAlt, faRetweet, faHeart } from '@fortawesome/free-solid-svg-icons';

const SavedGames = () => {
    const [users, setUsers] = useState([]);
    function getUsers() {
        axios.get("http://localhost:3001/api/posts",
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
            <h1>Interactions</h1>
            <div>
                {Array.from(users)?.map((user) => (
                    <Card style={{ width:'60rem' }} className="mx-2 my-5 bg-dark card-container" key={user.id}>
                        <div className='card-container'>
                        <Card.Link className='card-info' href={`/${user.username}`}>
                        {<Card.Img  style={{ objectFit:'cover'}} variant="top" src={`${"https://www.museothyssen.org/sites/default/files/styles/full_resolution/public/imagen/2019-10/PICASSO%2C%20Pablo%20Ruiz_Corrida%20de%20toros_706%20%281976.83%29_FOTOH%20%23F21.jpg"}`} />}
                        </Card.Link>
                        <Card.ImgOverlay>
                            <Card.Text>
                            <FontAwesomeIcon className="icon" icon={faEye} />
                            </Card.Text>
                            <Card.Text className="icon2">
                                <FontAwesomeIcon className="icon-item" icon={faHeart} />
                                <FontAwesomeIcon className="icon-item" icon={faCommentAlt} />
                                <FontAwesomeIcon className="icon-item" icon={faRetweet} />
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
                                {/* {user.postcomments.length > 3 ? 
                                <>
                                    <p>Show {user.postcomments.length} comments</p>
                                </> : 
                                Array.from(user.postcomments)?.map((comment) => (
                                    <Card.Body key={comment.id}>
                                        <Card.Text>{comment.comment_text}</Card.Text>
                                        <Card.Text>{comment.created_date_time}</Card.Text>
                                    </Card.Body>
                                ))} */}
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default SavedGames;