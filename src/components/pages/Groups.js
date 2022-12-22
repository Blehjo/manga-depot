import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Row, Col, Card, Badge } from "react-bootstrap";
import { utcConverter } from "../../utils/date/Date";

const Groups = () => {
    const [groups, setGroups] = useState({});
    
    function getGroups() {
        axios.get(`/groups/`,
        {
            mode: 'no-cors',
        })
        .then((response) => setGroups(response.data));
    }

    useEffect(() => {
        getGroups();
    }, []);

    return (
        <Fragment>
            <Row xs={1} sm={1} md={1} lg={1} xl={1} className="g-4 mt-2 m-5" key="groups">
                {Array.from(groups)?.map(({ id, group_name, group_description, platform, country, created_date_time, media_location_url }) => (
                    <Card.Link style={{ textDecoration: 'none' }} href={`/groups/${id}`}>
                        <Card text='white' className='' bg='dark'>
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
                ))}
            </Row>
        </Fragment>
    )
}

export default Groups;