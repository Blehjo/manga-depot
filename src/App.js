import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import SidebarIndex from "./components/SidebarIndex";

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
import { useSelector } from "react-redux";
import { selectCurrentUser } from "./store/user/user.selector";

function App() {
  const [loading, setLoading] = useState(false);
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    const handleLoading = async () => {
      setLoading(true);

      await axios.get('https://shellgeistapi.herokuapp.com/api/users')
      .then((response) => response.data)
      .catch((error) => console.log(error));

      setLoading(false);
    }
    handleLoading();
  }, []);

  if (loading) {
    return <Loading/>;
  }

  return (
    <Routes>
      <Route path='/' element={<><NavBar/><SidebarIndex/></>} >
        <Route index element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/authentication' element={<Authentication />}/>
        {/* <Route path='/connections' element={currentUser ? <Connections /> : <Authentication /> }/>
        <Route path="/dashboard" element={currentUser ? <Dashboard /> : <Authentication /> }/> */}
        <Route path='/discovery' element={currentUser ? <Discovery /> : <Authentication /> }/>
        {/* <Route path='/groups/:id' element={currentUser ? <Group /> : <Authentication /> }/>
        <Route path='/interactions' element={currentUser ? <Interactions /> : <Authentication /> }/>
        <Route path='/messages' element={currentUser ? <Messages /> : <Authentication /> }/>
        <Route path='/messages/:id' element={currentUser ? <Message /> : <Authentication /> }/>
        <Route path='/profile' element={currentUser ? <Profile /> : <Authentication /> }/> */}
        <Route path='/explore' element={<Explore />}/>
        {/* <Route path='/events' element={<Events />}/>
        <Route path='/games' element={<Games />}/>
        <Route path='/games/:id/:imageId' element={<GameProfile />}/>
        <Route path='/groups' element={<Groups />}/>
        <Route path='/posts' element={<Posts />}/>
        <Route path='/posts/:id' element={<Post />}/>
        <Route path='/profile/:id' element={<SingleProfile />}/>
        <Route path='/profiles' element={<Profiles />}/>  */}
        <Route path='/search' element={<Search />}/>
      </Route>
    </Routes>
  );
}

export default App;
