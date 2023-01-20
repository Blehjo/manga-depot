import { useContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
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

import { AuthContext } from "./contexts/auth.context";

function App() {
  const { auth, setAuth } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPeopleData();
  }, []);

  const fetchPeopleData = async () => {
    setLoading(true);
    try {
      const data = await axios({
        url: "https://shellgeistapi.herokuapp.com/api/users", 
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setAuth(data);
      console.log(auth)
    } catch (error) {
      console.error(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading/>;
  }

  return (
    <Routes>
      <Route path='/' element={<><NavBar/><SidebarIndex/></>} >
        <Route index element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/authentication' element={<Authentication />}/>
        <Route path='/connections' element={auth ? <Connections /> : <Authentication /> }/>
        <Route path="/dashboard" element={auth ? <Dashboard /> : <Authentication /> }/>
        <Route path='/discovery' element={auth ? <Discovery /> : <Authentication /> }/>
        <Route path='/groups/:id' element={auth ? <Group /> : <Authentication /> }/>
        <Route path='/interactions' element={auth ? <Interactions /> : <Authentication /> }/>
        <Route path='/messages' element={auth ? <Messages /> : <Authentication /> }/>
        <Route path='/messages/:id' element={auth ? <Message /> : <Authentication /> }/>
        <Route path='/profile' element={auth ? <Profile /> : <Authentication /> }/>
        <Route path='/explore' element={<Explore />}/>
        <Route path='/events' element={<Events />}/>
        <Route path='/games' element={<Games />}/>
        <Route path='/games/:id/:imageId' element={<GameProfile />}/>
        <Route path='/groups' element={<Groups />}/>
        <Route path='/posts' element={<Posts />}/>
        <Route path='/posts/:id' element={<Post />}/>
        <Route path='/profile/:id' element={<SingleProfile />}/>
        <Route path='/profiles' element={<Profiles />}/>
        <Route path='/search' element={<Search />}/>
      </Route>
    </Routes>
  );
}

export default App;
