import { Fragment } from "react";
import Groups from "./Groups";
import Events from "./Events";
import { Tab, Tabs } from "react-bootstrap";

const Discovery = () => {
    return (
        <Fragment>
            <Tabs
            defaultActiveKey="groups"
            id="justify-tab-example"
            justify
            className="m-5"
            >
                <Tab eventKey="groups" title="Groups">
                    <Groups/>
                </Tab>
                <Tab eventKey="events" title="Events">
                    <Events/>
                </Tab>
            </Tabs>
        </Fragment>
    );
}

export default Discovery