import { Fragment } from "react";
import { Tabs, Tab } from "react-bootstrap";
import GameResults from "../GameResults";
import GroupResults from "../GroupResults";
import Events from "./Events";
import Profiles from "./Profiles";

const Search = () => {
    return (
        <Tabs
            defaultActiveKey="games"
            id="justify-tab-example"
            justify
            className='mt-2 mb-5'
            variant='pills'
            bg='dark'
        >
            <Tab eventKey="games" title="Games">
                <GameResults />
            </Tab>
            <Tab eventKey="people" title="People">
                <Profiles />
            </Tab>
            <Tab eventKey="groups" title="Groups">
                <GroupResults/>
            </Tab>
            <Tab eventKey="events" title="Events">
                <Events />
            </Tab>
        </Tabs>
    )
}

export default Search;