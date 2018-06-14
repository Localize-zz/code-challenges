import React from 'react';
import logo from '../img/logo.png';

const Navbar = () => (
  <div className="Navbar">
    <div className="Logo">
      <img src={logo} className="Wribbn-logo" alt="logo" />
    </div>
    <div className="Menu">
      <div className="Menu-item"><i className="material-icons">explore</i>Explore</div>
      <div className="Menu-item"><i className="material-icons">chat_bubble</i>Chat</div>
      <div className="Menu-item"><i className="material-icons">account_circle</i>Profile</div>
    </div>
    <div className="Search">
      <input type="text" placeholder="Search..." />
    </div>
  </div>

);

export default Navbar;
