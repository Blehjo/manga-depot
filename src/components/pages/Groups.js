import { useState, useEffect } from "react";
import { Row, Col, Card, Badge, Button } from "react-bootstrap";
import { utcConverter } from "../../utils/date/Date";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const Groups = () => {
    const currentUser = useSelector(selectCurrentUser);
    const [groups, setGroups] = useState([]);

    async function handleClickEvent(event) {
        await axios({
            method: 'post',
            url: `https://shellgeistapi.herokuapp.com/api/groupmembers/`, 
            data: {
                group_id: event.target.id
            },
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
    }
    
    async function unfollowGroup(event) {
        await axios({
            method: 'delete',
            url: `https://shellgeistapi.herokuapp.com/api/groupmembers/${event.target.id}`,
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
    }

    useEffect(() => {
        async function getUser() {
            await axios({
                method: 'get',
                url: 'https://shellgeistapi.herokuapp.com/api/users',
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })

        }

        async function getGroups() {
            await axios({
                method: 'get',
                url: "https://shellgeistapi.herokuapp.com/groups",
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            .then((response) => setGroups(response.data));
        }
        getUser();
        getGroups();
    }, []);
    
    return (
        <Row xs={1} key="groups">
        {Array.from(groups)?.map(({ id, group_name, group_description, platform, country, created_date_time, media_location_url, groupmembers }) => (
            <Row style={{ marginBottom: '3rem', margin: 'auto', color: 'white' }}>
                <Col style={{ marginBottom: '1rem' }} xl={4}>
                <Card.Link style={{ textDecoration: 'none' }} href={`/groups/${id}`}>
                    <Card.Img height='200' style={{ objectFit:'cover', borderRadius: '.5rem' }} src={media_location_url} />
                </Card.Link>
                </Col>
                <Col xl={8} key={id}>
                    <Row xs={2} >
                        <Col>
                            <Card.Link style={{ textDecoration: 'none', color: 'white' }} href={`/groups/${id}`}>
                            <Card.Header>{group_name}</Card.Header>
                            </Card.Link>
                        </Col>
                        
                    </Row>
                    <Card.Body>
                        <Card.Text>
                            {group_description}
                        </Card.Text>
                        <Card.Text>{`Established ${utcConverter(created_date_time)}`} | Members: {groupmembers.length}</Card.Text>
                            {platform && 'Platform:  '}<Badge pill='info'>{platform}</Badge>
                            <Col style={{ marginTop: '1rem' }}>
                                {(groupmembers.some(({ profile_id }) => profile_id === currentUser?.id)) ? <Button variant="light" id={id} onClick={unfollowGroup}>Leave Shell</Button> : <Button variant="light" id={id} onClick={handleClickEvent}>Join Shell</Button>}
                            </Col>
                    </Card.Body>
                </Col>
            </Row>
        ))}
    </Row>
    )
}

export default Groups;