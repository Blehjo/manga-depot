import { useState, useEffect, Fragment, useContext } from "react";
import axios from "axios";
import { Row, Col, Card, Badge, Button } from "react-bootstrap";
import { utcConverter } from "../../utils/date/Date";

import { AuthContext } from "../../contexts/auth.context";
import { GroupResultContext } from "../../contexts/groupresult.context";

const Groups = () => {
    const { auth } = useContext(AuthContext);
    const { groupResults } = useContext(GroupResultContext);
    const [groups, setGroups] = useState([]);

    async function handleClickEvent(event) {
        await axios.post(`/api/groupmembers/`, {
            group_id: event.target.id
        })
    }

    useEffect(() => {
        async function getGroups() {
            await axios.get("/groups",
            {
                mode: 'no-cors',
            })
            .then((response) => setGroups(response.data));
        }
        getGroups();
    }, []);

    return (
        <Fragment>
            <Row xs={1} sm={1} md={1} lg={1} xl={1} className="g-4 mt-2 m-5" key="groups">
                {Array.from(groups)?.map(({ id, group_name, group_description, platform, country, created_date_time, media_location_url, groupmembers }) => (
                    <Card.Link style={{ textDecoration: 'none' }} href={`/groups/${id}`}>
                        <Card text='white' className='' bg='dark'>
                            <Row>
                                <Col xl={4}>
                                    <Card.Img height='200' style={{ objectFit:'cover'}} src={media_location_url} />
                                </Col>
                                <Col xl={8} key={id}>
                                    <Row xs={2} sm={2} md={2} lg={2} xl={2}>
                                        <Col>
                                            <Card.Header>{group_name}</Card.Header>
                                        </Col>
                                       
                                    </Row>
                                    <Card.Body>
                                        <Card.Text>
                                            {group_description}
                                        </Card.Text>
                                        <Card.Text>{`Established ${utcConverter(created_date_time)}`} | Members: {groupmembers.length}</Card.Text>
                                            {platform && 'Platform:  '}<Badge pill='info'>{platform}</Badge>
                                            <Col style={{ marginTop: '1rem' }}>
                                                {(groupmembers.some(({ profile_id }) => profile_id === auth[0].id)) || <Button variant="light" id={id} onClick={handleClickEvent}>Join Shell</Button> }
                                            </Col>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Card.Link>
                ))}
            </Row>
        </Fragment>
    )
}

export default Groups;