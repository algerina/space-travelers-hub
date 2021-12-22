import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import planet from './images/planet.png';
import Myprofile from './components/Myprofile';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <div>
          <img src={planet} alt="planet" />
          <h1>Space Travelers Hub</h1>
          <ul>
            <li><NavLink to="/">Rockets</NavLink></li>
            <li><NavLink to="/missions">Missions</NavLink></li>
            <span>|</span>
            <li><NavLink to="/profile">My Profile</NavLink></li>
          </ul>
        </div>
      </nav>
      <div>
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
