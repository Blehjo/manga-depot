import { React, useContext, useEffect, useState } from "react";

import GenreCarousel from "../components/carousels/GenreCarousels";
import GroupCarousel from "../components/carousels/GroupCarousel";
import GameCarousel from "../components/carousels/GameCarousel";
import EventCarousel from "../components/carousels/EventCarousel";
import Games from "../components/main/Games";

// import gameData from "../utils/IGDB";
import { SearchContext } from "../contexts/search.context";
import { ResultContext } from "../contexts/result.context";

import axios from "axios";
import moment from "moment";

const Explore = () => {
    const { searchField } = useContext(SearchContext);
    const { results } = useContext(ResultContext);
    console.log(results)
    const [errorMessage, setErrorMessage] = useState('');
    
    return (
        <div className="">
            <h1>Explore</h1>
            <GenreCarousel/>
            <GameCarousel/>
            <GroupCarousel/>
            <EventCarousel/> 
            <Games results={results} />
        </div>
    )
}

export default Explore;