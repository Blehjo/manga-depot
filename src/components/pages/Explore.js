import { Fragment } from "react";

import GenreCarousel from "../Carousels/GenreCarousels";
import GroupCarousel from "../Carousels/GroupCarousel";
import GameCarousel from "../Carousels/GameCarousel";
import EventCarousel from "../Carousels/EventCarousel";

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