import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const Navbar = () => (
  <div className="Navbar">
    <div className="Logo">
      <img src={logo} className="Wribbn-logo" alt="logo" />
    </div>
    <div className="small-screen">
      <i className="material-icons">menu</i>
    </div>
    <div className="Menu">
      <Link to='/explore'><div className="Menu-item"><i className="material-icons">explore</i>Nearby</div></Link>
      <Link to='/feed'><div className="Menu-item"><i className="material-icons">view_list</i>Feed</div></Link>
      <Link to='/favorites'><div className="Menu-item"><i className="material-icons">stars</i>Your Favorites</div></Link> 
    </div>
    <div className="Search">
      <input type="text" placeholder="Search..." />
    </div>
  </div>

);

export default Navbar;
