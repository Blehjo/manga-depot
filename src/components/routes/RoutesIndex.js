import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Explore from "../pages/Explore";
import Interactions from "../pages/Interactions";
import Groups from "../pages/Groups";
import Group from "../pages/Group"
import LikedPosts from "../pages/LikedPosts";
import Friends from "../pages/Friends";
import Connections from "../pages/Connections";
import About from "../pages/About";
import Authentication from "../pages/Authentication";
import Posts from "../pages/Posts";
import Post from "../pages/Post";
import Search from "../pages/Search";

const RoutesIndex = (props) => {
    return (
        <Routes>
            {/* <Route index element={<Home results={props.results}/>}/> */}
            <Route path="/" element={<Home results={props.results}/>}/>
            <Route path='/explore' element={<Explore />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path='/interactions' element={<Interactions />}/>
            <Route path='/groups/' element={<Groups />}/>
            <Route path='/groups/:id' element={<Group />}/>
            <Route path='/likedposts' element={<LikedPosts />}/>
            <Route path='/friends' element={<Friends />}/>
            <Route path='/connections' element={<Connections />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/authentication' element={<Authentication />}/>
            <Route path='/posts' element={<Posts />}/>
            <Route path='/posts/:profile_id/:id' element={<Post />}/>
            <Route path='/search' element={<Search />}/>
        </Routes>
    )
}

export default RoutesIndex;