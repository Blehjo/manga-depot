import React from "react";
import GenreCarousel from "../components/carousels/GenreCarousels";
import GroupCarousel from "../components/carousels/GroupCarousel";
import GameCarousel from "../components/carousels/GameCarousel";
import TournamentCarousel from "../components/carousels/TournamentCarousel";

const Explore = () => {
    return (
        <div className="m-auto">
            <h1>Explore</h1>
            <GenreCarousel/>
            <GameCarousel/>
            <GroupCarousel/>
            <TournamentCarousel/>
        </div>
    )
}

export default Explore;