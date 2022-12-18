import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import SidebarIndex from "./components/SidebarIndex";
import Footer from "./components/Footer";

import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import Explore from "./components/pages/Explore";
import Interactions from "./components/pages/Interactions";
import Group from "./components/pages/Group"
import Events from "./components/pages/Events";
import Groups from "./components/pages/Groups";
import Connections from "./components/pages/Connections";
import About from "./components/About";
import Authentication from "./components/pages/Authentication";
import Posts from "./components/pages/Posts";
import Post from "./components/pages/Post";
import Search from "./components/pages/Search";
import Messages from "./components/pages/Messages";
import Message from "./components/pages/Message";
import Profiles from "./components/pages/Profiles";
import Profile from "./components/pages/Profile";
import Games from "./components/Games";
import Discovery from "./components/pages/Discovery";
import SingleProfile from "./components/pages/SingleProfile";

import './App.css';
import GameProfile from "./components/GameProfile";

function App() {
  return (
    <Routes>
      <Route path='/' element={<><NavBar/><SidebarIndex/><Footer/></>} >
        <Route index element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/authentication' element={<Authentication />}/>
        <Route path='/connections' element={<Connections />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path='/discovery' element={<Discovery />}/>
        <Route path='/explore' element={<Explore />}/>
        <Route path='/events' element={<Events />}/>
        <Route path='/games' element={<Games />}/>
        <Route path='/games/:id/:imageId' element={<GameProfile />}/>
        <Route path='/groups/:id' element={<Group />}/>
        <Route path='/groups' element={<Groups />}/>
        <Route path='/interactions' element={<Interactions />}/>
        <Route path='/messages' element={<Messages />}/>
        <Route path='/messages/:id' element={<Message />}/>
        <Route path='/posts' element={<Posts />}/>
        <Route path='/posts/:id' element={<Post />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/profile/:id' element={<SingleProfile />}/>
        <Route path='/profiles' element={<Profiles />}/>
        <Route path='/search' element={<Search />}/>
      </Route>
    </Routes>
  );
}

export default App;
