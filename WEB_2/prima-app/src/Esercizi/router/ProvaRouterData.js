import React, { useEffect, useState } from "react";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";
import ErrorPage from "./ErrorPage";
import SingleProfile from "./SingleProfile";
import MyProfile from "./MyProfile";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { routes } from "./routes";


const ProvaRouterData = () => {
  //   const [link, setLink] = useState("Home");
  //   const renderCondizionale = () => {
  //     if (link === "Home") {
  //       return <Home></Home>;
  //     }
  //     if (link === "About") {
  //       return <About></About>;
  //     }
  //     if (link === "Profile") {
  //       return <Profiles></Profiles>;
  //     }
  //   };
  //   useEffect(()=>{
  //     console.log("Componente renderizzato")
  //   })
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Profiles">Profiles</Link>
        </nav>
        <hr></hr>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/profiles" element={<Profiles></Profiles>}>
            <Route path="/profiles/:id" element={<SingleProfile></SingleProfile>}></Route>
            <Route path="/profiles/me" element={<MyProfile></MyProfile>}></Route>
          </Route>
          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <nav className="navbar justify-content-between">
        <button className="btn btn-link nav-link" onClick={()=>setLink("Home")}>Home</button>
        <button className="btn btn-link nav-link" onClick={()=>setLink("About")}>About</button>
        <button className="btn btn-link nav-link" onClick={()=>setLink("Profile")}>Profile</button>
      </nav>
      <div>
        <br></br>
        {renderCondizionale}
      </div> */}
    </div>
  );
};

export default ProvaRouterData;
