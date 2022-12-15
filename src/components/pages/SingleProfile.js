
import { Col, Row, Tabs, Tab } from "react-bootstrap";
import UserPostsTab from "../UserPostsTab";
import UserGamesTab from "../UserGamesTab";
import UserGroupsTab from "../UserGroupsTab";
import UserEventsTab from "../UserEventsTab";
import UserProfileCard from "../UserProfileCard";

const SingleProfile = () => {
    

    return (
        <Row className="m-5" lg={2} xl={2}>
            <Col md={4} lg={4} xl={4}>
                <UserProfileCard/>
            </Col>
            <Col md={8} lg={8} xl={8}>
            <Tabs
                defaultActiveKey="posts"
                id="justify-tab-example"
                justify
                className='mb-5'
                variant='pills'
                bg='dark'
            >
                <Tab eventKey="posts" title="Posts">
                    <UserPostsTab />
                </Tab>
                <Tab eventKey="games" title="Games">
                    <UserGamesTab />
                </Tab>
                <Tab eventKey="groups" title="Groups">
                    <UserGroupsTab />
                </Tab>
                <Tab eventKey="events" title="Events">
                    <UserEventsTab />
                </Tab>
            </Tabs>
            </Col>
        </Row>
    );
}

export default SingleProfile;