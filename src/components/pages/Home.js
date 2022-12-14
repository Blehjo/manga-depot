import { Fragment } from "react";
import EventCarousel from "../carousel/EventCarousel";
import GameCarousel from "../carousel/GameCarousel";
import About from "../About";
import Activities from "../Activities";
import OnlineActivities from "../OnlineActivities";
import Introduction from "../Introduction";

const Home = () => {
    return (
        <Fragment>
            <About />
            <Activities />
            <EventCarousel /> 
            <Introduction />
            <OnlineActivities />
            <GameCarousel />
        </Fragment>
    );
}
 
export default Home;