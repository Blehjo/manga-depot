// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home"
import Dashboard from "../../pages/Dashboard";
import Explore from "../../pages/Explore";
import SavedGames from "../../pages/SavedGames";
import Groups from "../../pages/Groups";
import LikedPosts from "../../pages/LikedPosts";
import Friends from "../../pages/Friends";
import Connections from "../../pages/Connections";
import About from "../../pages/About"

const RoutesIndex = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home results={props.results}/>}>
                    <Route index element={<Home />}/>
                    <Route path="/dashboard" element={<Dashboard />}/>
                    <Route path='/explore' element={<Explore />}/>
                    <Route path='/savedgames' element={<SavedGames />}/>
                    <Route path='/groups' element={<Groups />}/>
                    <Route path='/likedposts' element={<LikedPosts />}/>
                    <Route path='/friends' element={<Friends />}/>
                    <Route path='/connections' element={<Connections />}/>
                    <Route path='/about' element={<About />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesIndex;