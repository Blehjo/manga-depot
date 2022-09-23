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

const RoutesIndex = () => {
    // const routes = useRoutes([
    //     { path: "/", element: <Home /> },
    //     { path: '/dashboard', element: <Dashboard />},
    //     { path: '/explore', element: <Explore />},
    //     { path: '/savedgames', element: <SavedGames />},
    //     { path: '/groups', element: <Groups />},
    //     { path: '/likedposts', element: <LikedPosts />},
    //     { path: '/friends', element: <Friends />},
    //     { path: '/connections', element: <Connections />}
    // ])
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
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