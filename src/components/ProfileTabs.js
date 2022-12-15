import { Tab, Tabs} from 'react-bootstrap';
import EventsTab from './EventsTab';
import GamesTab from './GamesTab';
import GroupsTab from './GroupsTab';
import PostsTab from './PostsTab';

const ProfileTabs = () => {
    return (
        <Tabs
        defaultActiveKey="posts"
        id="justify-tab-example"
        justify
        className='mt-2 mb-5'
        variant='pills'
        bg='dark'
        >
            <Tab eventKey="posts" title="Posts">
                <PostsTab />
            </Tab>
            <Tab eventKey="games" title="Games">
                <GamesTab />
            </Tab>
            <Tab eventKey="groups" title="Groups">
                <GroupsTab />
            </Tab>
            <Tab eventKey="events" title="Events">
                <EventsTab />
            </Tab>
        </Tabs>
    );
}

export default ProfileTabs;