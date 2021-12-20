import React from 'react';
import { Navlink } from 'react-router-dom';
import planet from '../images/planet.png';


const Nav = () => (
  <nav>
    <div>
      <img src={planet} alt="planet" />
      <h1>Space Travelers Hub</h1>
      <ul>
        <li><Navlink href="/rockets">Rockets</Navlink></li>
        <li><Navlink href="/missions">Missions</Navlink></li>
        <li>|</li>
        <li><Navlink href="/myProfile">My Profile</Navlink></li>
      </ul>
    </div>
  </nav>
);

export default Nav;
