import { React, useContext } from "react";

import GenreCarousel from "../components/carousels/GenreCarousels";
import GroupCarousel from "../components/carousels/GroupCarousel";
import GameCarousel from "../components/carousels/GameCarousel";
import EventCarousel from "../components/carousels/EventCarousel";

import { ResultContext } from "../contexts/result.context";

const Explore = () => {
    const { results } = useContext(ResultContext);
    
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