import React from "react";
import Body from "../components/main/Body";

const Home = (props) => {
    const { results } = props
    console.log(results)
    return (
        <>
            <Body results={results}/>
        </>
    )
}

export default Home;