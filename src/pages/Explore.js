import React from "react";
import GenreCarousel from "../components/carousels/GenreCarousels";
import GroupCarousel from "../components/carousels/GroupCarousel";
import GameCarousel from "../components/carousels/GameCarousel";
import EventCarousel from "../components/carousels/EventCarousel";

const Explore = () => {
    return (
        <div className="carousel-container ps-5 pe-3">
            <h1>Explore</h1>
            <GenreCarousel/>
            <GameCarousel/>
            <GroupCarousel/>
            <EventCarousel/>
        </div>
    )
}

export default Explore;