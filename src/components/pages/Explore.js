import { Fragment } from "react";

import GenreCarousel from "../carousel/GenreCarousels";
import GroupCarousel from "../carousel/GroupCarousel";
import GameCarousel from "../carousel/GameCarousel";
import EventCarousel from "../carousel/EventCarousel";
import PostCarousel from "../carousel/PostCarousel";

const Explore = () => {
    
    return (
        <Fragment>
            <h1 style={{ color: 'white' }}>Explore</h1>
            <GenreCarousel/>
            <GameCarousel/>
            <GroupCarousel/>
            <EventCarousel/> 
            <PostCarousel />
        </Fragment>
    )
}

export default Explore;