import { Fragment, useState, useEffect } from 'react';
import { Card, Row, Col, Badge, Modal } from 'react-bootstrap';
import axios from 'axios';

import { utcConverter } from '../utils/date/Date';

import CreateGroup from './CreateGroup';
import SearchGroup from './SearchGroup';

const GroupsTab = () => {
    const [groups, setGroups] = useState();
    const [showCreateGroup, setShowCreateGroup] = useState(false);
    const [showSearchGroup, setShowSearchGroup] = useState(false);

    const handleCloseCreateGroup = () => setShowCreateGroup(false);
    const handleShowCreateGroup= () => setShowCreateGroup(true);
    
    const handleCloseSearchGroup = () => setShowSearchGroup(false);
    const handleShowSearchGroup= () => setShowSearchGroup(true);
    
    useEffect(() => {
        const getGroups = async () => {
            await axios.get(`/api/groups/`, {
                mode: 'no cors'
            })
            .then((resp) => setGroups(resp.data)); 
        }
        getGroups();
    }, [])

    return (
        <Fragment>
            <Row xs={2} >
                <Col>
                    <Card style={{ color: 'white', textAlign: 'center' }} className='bg-dark'>
                        <Card.Body>
                            <Card.Title show={showCreateGroup} onHide={handleCloseCreateGroup} onClick={handleShowCreateGroup}>Create a shell</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ color: 'white', textAlign: 'center' }} className='bg-dark'>
                        <Card.Body>
                            <Card.Title show={showCreateGroup} onHide={handleCloseSearchGroup} onClick={handleShowSearchGroup}>Join a shell</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {groups?.length > 0 ? Array.from(groups)?.map(({ id, group_name, group_description, platform, media_location_url, country, created_date_time }) => (
                    <Card.Link style={{ textDecoration: 'none' }} href={`/groups/${id}`}>
                        <Card style={{ marginTop: '1rem', color: 'white' }} bg='dark'>
                            <Row>
                                <Col xl={4}>
                                    <Card.Img height='200' style={{ objectFit:'cover'}} src={media_location_url} />
                                </Col>
                                <Col xl={8} key={id}>
                                    <Card.Header>{group_name}</Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            {group_description}
                                        </Card.Text>
                                        <Card.Text>{`Established ${utcConverter(created_date_time)}`}</Card.Text>
                                        {'Platform:  '}<Badge pill='info'>{platform}</Badge>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Card.Link>
            )) : (
                <Row style={{ margin: '1rem' }}>
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