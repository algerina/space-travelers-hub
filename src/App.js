import React from 'react';
import {
  BrowserRouter as Router, Routes,
  Route, NavLink,
} from 'react-router-dom';
import planet from './images/planet.png';
import Myprofile from './components/Myprofile';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div>
            <img src={planet} alt="planet" />
            <h1>Space Travelers Hub</h1>
            <ul>
              <li><NavLink href="/">Rockets</NavLink></li>
              <li><NavLink href="/">Missions</NavLink></li>
              <li>|</li>
              <li><NavLink href="/">My Profile</NavLink></li>
            </ul>
          </div>
        </nav>
        <div>
          <Routes>
            <Route exact path="/" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/profile" element={<Myprofile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
