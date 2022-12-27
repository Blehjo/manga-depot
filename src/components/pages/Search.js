import { Fragment, useContext } from "react";
import { Tabs, Tab } from "react-bootstrap";
import SearchBar from "../SearchBar";
import GameResults from "../GameResults";

import { ResultContext } from "../../contexts/result.context";
import { GroupResultContext } from "../../contexts/groupresult.context";
import { UserProfilesContext } from "../../contexts/userprofiles.context";

import GroupResults from "../GroupResults";
import Profiles from "./Profiles";
import Events from "./Events";

const Search = () => {
    const { results } = useContext(ResultContext);
    // const { groupResults } = useContext(GroupResultContext);
    // const { userProfiles } = useContext(UserProfilesContext);

    return (
        <Fragment>
            {results ? (
            // results.length === 0 || groupResults.length === 0 ? (
                <SearchBar/>
            ) : (
                // <Fragment>
                //     <Tabs
                //         defaultActiveKey="games"
                //         id="justify-tab-example"
                //         justify
                //         className='mt-2 mb-5'
                //         variant='pills'
                //         bg='dark'
                //     >
                //         <Tab eventKey="games" title="Games">
                //             <GameResults />
                //         </Tab>
                //         <Tab eventKey="people" title="People">
                //             <Profiles />
                //         </Tab>
                //         <Tab eventKey="groups" title="Groups">
                //             <GroupResults />
                //         </Tab>
                //         <Tab eventKey="events" title="Events">
                //             <Events />
                //         </Tab>
                //     </Tabs>
                // </Fragment>
                <GameResults />
            )}
        </Fragment>
    )
}

export default Search;