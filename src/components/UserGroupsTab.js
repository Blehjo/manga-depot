import { Fragment, useState, useEffect } from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import axios from 'axios';

import { utcConverter } from '../utils/date/Date';
import { useParams } from 'react-router';

const UserGroupsTab = () => {
    const [groups, setGroups] = useState();
    const { id } = useParams();
    
    useEffect(() => {
        const getGroups = async () => {
            await axios.get(`/groups/${id}`, {
                mode: 'no cors'
            })
            .then((resp) => setGroups(resp.data)); 
        }
        getGroups();
    }, [id])

    return (
        <Fragment>
            {groups?.length > 0 ? Array.from(groups)?.map(({ id, group_name, group_description, platform, country, created_date_time, media_location_url }) => (
                <Card.Link key={id} style={{ textDecoration: 'none', color: 'white', margin: '1rem' }} href={`/groups/${id}`}>
                    {/* <Card key='information' style={{ margin: '1rem', color: 'white' }} bg='dark'> */}
                        <Row>
                            <Col key='img' xl={4}>
                                <Card.Img height='200' style={{ objectFit:'cover', borderRadius: '.5rem' }} src={media_location_url} />
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
                    {/* </Card> */}
                </Card.Link>
            )) : (
                <Card key='excuse' style={{ color: 'white', textAlign: 'center' }}className="bg-dark">
                    <Card.Title>"Stay tuned. Currently no groups..."</Card.Title>
                </Card>
            )}
        </Fragment>
    );
}

export default UserGroupsTab;