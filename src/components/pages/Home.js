import { Fragment } from "react";
import EventCarousel from "../Carousels/EventCarousel";
import GameCarousel from "../Carousels/GameCarousel";
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