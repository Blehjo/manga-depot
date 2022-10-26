import { React, useContext } from "react";

import GenreCarousel from "../components/carousels/GenreCarousels";
import GroupCarousel from "../components/carousels/GroupCarousel";
import GameCarousel from "../components/carousels/GameCarousel";
import EventCarousel from "../components/carousels/EventCarousel";
import Games from "../components/main/Games";

import { ResultContext } from "../contexts/result.context";

const Explore = () => {
    const { results } = useContext(ResultContext);
    
    return (
        <div className="">
            <h1>Explore</h1>
        {results.length === 0 ? (
            <GenreCarousel/>
            // <GameCarousel/>
            // <GroupCarousel/>
            // <EventCarousel/> 
    ) : (
            <Games results={results}/>

    )}
        </div>
    )
}

export default Explore;