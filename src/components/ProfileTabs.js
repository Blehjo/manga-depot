import { Tab, Tabs} from 'react-bootstrap';

const ProfileTabs = () => {
    return (
        <Tabs
        defaultActiveKey="posts"
        id="justify-tab-example"
        justify
        >
            <Tab eventKey="posts" title="Posts">
            </Tab>
            <Tab eventKey="games" title="Games">
            </Tab>
            <Tab eventKey="groups" title="Groups">
            </Tab>
            <Tab eventKey="events" title="Events">
            </Tab>
        </Tabs>
    );
}

export default ProfileTabs;