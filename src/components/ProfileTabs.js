import { Tab, Tabs} from 'react-bootstrap';
import EventsTab from './EventsTab';
import GamesTab from './GamesTab';
import GroupsTab from './GroupsTab';
import PostsTab from './PostsTab';

const ProfileTabs = ({ profileData }) => {
    return (
        <Tabs
        defaultActiveKey="posts"
        id="justify-tab-example"
        justify
        >
            <Tab eventKey="posts" title="Posts">
                <PostsTab profileData={profileData} />
            </Tab>
            <Tab eventKey="games" title="Games">
                <GamesTab profileData={profileData} />
            </Tab>
            <Tab eventKey="groups" title="Groups">
                <GroupsTab profileData={profileData} />
            </Tab>
            <Tab eventKey="events" title="Events">
                <EventsTab profileData={profileData} />
            </Tab>
        </Tabs>
    );
}

export default ProfileTabs;