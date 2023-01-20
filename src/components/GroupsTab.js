import { Fragment, useState, useEffect } from 'react';
import { Card, Row, Col, Badge, Modal, Button } from 'react-bootstrap';
import axios from 'axios';

import { utcConverter } from '../utils/date/Date';

import CreateGroup from './CreateGroup';
import SearchGroup from './SearchGroup';

const GroupsTab = () => {
    const [auth, setAuth] = useState([]);
    const [groups, setGroups] = useState();
    const [showCreateGroup, setShowCreateGroup] = useState(false);
    const [showSearchGroup, setShowSearchGroup] = useState(false);

    const handleCloseCreateGroup = () => setShowCreateGroup(false);
    const handleShowCreateGroup= () => setShowCreateGroup(true);
    
    const handleCloseSearchGroup = () => setShowSearchGroup(false);
    const handleShowSearchGroup= () => setShowSearchGroup(true);
    
    useEffect(() => {
        async function getUser() {
            await axios.get('/api/users')
            .then((response) => setAuth(response.data[0]));
        }

        const getGroups = async () => {
            await axios.get(`/api/groups/`, {
                mode: 'no cors'
            })
            .then((resp) => setGroups(resp.data)); 
        }

        getUser();
        getGroups();
    }, [])

    async function handleClickEvent(event) {
        await axios.post(`/api/groupmembers/`, {
            group_id: event.target.id
        })
    }
    
    async function unfollowGroup(event) {
        await axios.delete(`/api/groupmembers/${event.target.id}`)
    }

    return (
        <Fragment>
            <Row style={{ marginBottom: '2rem' }} xs={2} >
                <Col>
                    <Card style={{ color: 'white', textAlign: 'center' }} className='bg-dark'>
                        <Card.Body>
                            <Card.Title style={{ cursor: 'pointer' }} show={showCreateGroup} onHide={handleCloseCreateGroup} onClick={handleShowCreateGroup}>Create a shell</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ color: 'white', textAlign: 'center' }} className='bg-dark'>
                        <Card.Body>
                            <Card.Title style={{ cursor: 'pointer' }} show={showCreateGroup} onHide={handleCloseSearchGroup} onClick={handleShowSearchGroup}>Join a shell</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {groups?.length > 0 ? Array.from(groups)?.map(({ id, group_name, group_description, platform, media_location_url, country, created_date_time, groupmembers }) => (
                <Row style={{ marginBottom: '2rem', color: 'white', justifyContent: 'center' }}>
                    <Col xl={4}>
                    <Card.Link style={{ textDecoration: 'none', color: 'white' }} href={`/groups/${id}`}>
                        <Card.Img height='200' style={{ objectFit:'cover', borderRadius: '.5rem' }} src={media_location_url} />
                    </Card.Link>
                    </Col>
                    <Col xl={8} key={id}>
                        <Card.Link style={{ textDecoration: 'none', color: 'white' }} href={`/groups/${id}`}>
                        <Card.Header>{group_name}</Card.Header>
                        </Card.Link>
                        <Card.Body>
                            <Card.Text>
                                {group_description}
                            </Card.Text>
                            <Card.Text>{`Established ${utcConverter(created_date_time)}`}</Card.Text>
                            {'Platform:  '}<Badge pill='info'>{platform}</Badge>
                            <Col style={{ marginTop: '1rem' }}>
                                {(groupmembers.some(({ profile_id }) => profile_id === auth.id)) ? <Button variant="light" id={id} onClick={unfollowGroup}>Leave Shell</Button> : <Button variant="light" id={id} onClick={handleClickEvent}>Join Shell</Button>}
                            </Col>
                        </Card.Body>
                    </Col>
                </Row>
            )) : (
                <Row style={{ marginTop: '1rem' }}>
                    <Col>
                        <Card style={{ color: 'white', textAlign: 'center' }}className="bg-dark">
                            <Card.Title>"Stay tuned. Currently no groups..."</Card.Title>
                        </Card>
                    </Col>
                </Row>
            )}
            <Modal show={showCreateGroup} onHide={handleCloseCreateGroup}>
                <CreateGroup />
            </Modal>
            <Modal show={showSearchGroup} onHide={handleCloseSearchGroup}>
                <SearchGroup />
            </Modal>
        </Fragment>
    );
}

export default GroupsTab;