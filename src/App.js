import React from 'react';
import {
  BrowserRouter as Router, Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import planet from './images/planet.png';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div>
            <img src={planet} alt="planet" />
            <h1 className="bg-dark-red">Space Travelers Hub</h1>
            <ul>
              <li><NavLink href="/rockets" activeclassname="active">Rockets</NavLink></li>
              <li><NavLink href="/missions" activeclassname="active">Missions</NavLink></li>
              <li>|</li>
              <li><NavLink href="/myProfile" activeclassname="active">My Profile</NavLink></li>
            </ul>
          </div>
        </nav>
        <div>
          <Routes>
            <Route exact path="/" />
            <Route exact path="/" />
            <Route exact path="/" />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
