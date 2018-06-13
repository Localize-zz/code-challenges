import React from 'react';
import logo from '../img/logo.png';

const Navbar = () => (
  <div className="Navbar">
    <div className="Logo">
      <img src={logo} className="Wribbn-logo" alt="logo" />
    </div>
    <div className="Search">
      <input type="text" placeholder="Search..." />
    </div>
    <div className="Menu">
      <ul className="Menu-list">
        <li className="Nav-item"><i className="material-icons">explore</i>Explore</li>
        <li className="Nav-item"><i className="material-icons">chat_bubble</i>Chat</li>
        <li className="Nav-item"><i className="material-icons">account_circle</i>Profile</li>
      </ul>
    </div>
  </div>

);

export default Navbar;
