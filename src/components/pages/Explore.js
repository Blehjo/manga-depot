import { Fragment } from "react";

import GenreCarousel from "../carousel/GenreCarousels";
import GroupCarousel from "../carousel/GroupCarousel";
import GameCarousel from "../carousel/GameCarousel";
import EventCarousel from "../carousel/EventCarousel";
import PostCarousel from "../carousel/PostCarousel";
import ProfileCarousel from "../carousel/ProfileCarousel";

const Explore = () => {
    
    return (
        <Fragment>
            <h1 style={{ color: 'white' }}>Explore</h1>
            <ProfileCarousel />
            <GenreCarousel/>
            <GameCarousel/>
            <GroupCarousel/>
            <EventCarousel/> 
            <PostCarousel />
        </Fragment>
    )
}

export default Explore;