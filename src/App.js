import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import planet from './images/planet.png';
import Myprofile from './components/Myprofile';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <nav className="row">
        <div className="col row">
          <div className="col-5 col-sm-7 d-flex">
            <img src={planet} alt="planet" />
            <h1 className="d-none d-md-block m-0 ps-1">Space Travelers Hub</h1>
          </div>
          <div className="col-7 col-sm-5 hstack">
            <NavLink
              className={({ isActive }) => (isActive ? 'pe-1 ms-auto active-link' : 'pe-1 ms-auto')}
              to="/"
            >
              Rockets
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              to="/missions"
            >
              Missions
            </NavLink>
            <span className="px-1">|</span>
            <NavLink
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              to="/profile"
            >
              My Profile
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="row">
        <Routes>
          <Route exact path="/" element={<Rockets />} />
          <Route path="missions" element={<Missions />} />
          <Route path="profile" element={<Myprofile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
