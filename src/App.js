import { Routes, Route } from "react-router-dom";

import NavBar from "./components/main/NavBar";

import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import Explore from "./components/pages/Explore";
import Interactions from "./components/pages/Interactions";
import Groups from "./components/pages/Groups";
import Group from "./components/pages/Group"
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

import './App.css';
import SidebarIndex from "./components/main/SidebarIndex";
import Footer from "./components/main/Footer";

function App() {
  return (
    <Routes>
      <Route path='/' element={<><NavBar/><SidebarIndex/><Footer/></>} >
        <Route index element={<Home />}/>
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
      </Route>
    </Routes>
  );
}

export default App;
