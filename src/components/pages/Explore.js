import { React } from "react";

import GenreCarousel from "../carousels/GenreCarousels";
import GroupCarousel from "../carousels/GroupCarousel";
import GameCarousel from "../carousels/GameCarousel";
import EventCarousel from "../carousels/EventCarousel";

const Explore = () => {
    
    return (
        <div className="">
            <h1>Explore</h1>
            <GenreCarousel/>
            <GameCarousel/>
            <GroupCarousel/>
            <EventCarousel/> 
        </div>
    )
}

export default Explore;