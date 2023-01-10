
import { Col, Row, Tabs, Tab } from "react-bootstrap";
import UserPostsTab from "../UserPostsTab";
import UserGamesTab from "../UserGamesTab";
import UserGroupsTab from "../UserGroupsTab";
import UserEventsTab from "../UserEventsTab";
import UserProfileCard from "../UserProfileCard";

const SingleProfile = () => {
    return (
        <Row lg={2}>
            <Col style={{ marginBottom: '2rem' }}lg={4}>
                <UserProfileCard/>
            </Col>
            <Col lg={8}>
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