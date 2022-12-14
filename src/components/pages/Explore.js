import { Fragment } from "react";

import GenreCarousel from "../carousel/GenreCarousels";
import GroupCarousel from "../carousel/GroupCarousel";
import GameCarousel from "../carousel/GameCarousel";
import EventCarousel from "../carousel/EventCarousel";

const Explore = () => {
    
    return (
        <Fragment>
            <h1>Explore</h1>
            <GenreCarousel/>
            <GameCarousel/>
            <GroupCarousel/>
            <EventCarousel/> 
        </Fragment>
    )
}

export default Explore;