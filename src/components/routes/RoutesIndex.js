import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Explore from "../pages/Explore";
import Interactions from "../pages/Interactions";
import Groups from "../pages/Groups";
import Group from "../pages/Group"
import Connections from "../pages/Connections";
import About from "../pages/About";
import Authentication from "../pages/Authentication";
import Posts from "../pages/Posts";
import Post from "../pages/Post";
import Search from "../pages/Search";
import Messages from "../pages/Messages";
import Message from "../pages/Message";
import Profiles from "../pages/Profiles";
import Profile from "../pages/Profile";

const RoutesIndex = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Home results={props.results}/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/authentication' element={<Authentication />}/>
            <Route path='/connections' element={<Connections />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path='/explore' element={<Explore />}/>
            <Route path='/groups/' element={<Groups />}/>
            <Route path='/groups/:id' element={<Group />}/>
            <Route path='/interactions' element={<Interactions />}/>
            <Route path='/messages' element={<Messages />}/>
            <Route path='/messages/:id' element={<Message />}/>
            <Route path='/posts' element={<Posts />}/>
            <Route path='/posts/:profile_id/:id' element={<Post />}/>
            <Route path='/profile/' element={<Profile />}/>
            <Route path='/profile/*' element={<Profile />}/>
            <Route path='/profiles/' element={<Profiles />}/>
            <Route path='/search' element={<Search />}/>
        </Routes>
    )
}

export default RoutesIndex;