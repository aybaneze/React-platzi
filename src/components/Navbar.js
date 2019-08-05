import React from 'react';
import '../pages/styles/Navbar.css'
import {Link} from 'react-router-dom'
import logo from '../images/logo.svg'

class NavBar extends React.Component{
  render(){
    return(
      <div className="Navbar">
          <div className="container-fluid">
              <Link to="/" className="Navbar_brand">
              <img src={logo} className="Navbar_brand-logo" alt="logo"/>
              <span className="font-weight-light">Platzi </span> 
              <span className="font-weight-bold">Conf</span>
          </Link>
          </div>
      </div>
    )
  }
}

export default NavBar;