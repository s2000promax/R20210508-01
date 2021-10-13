import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


export const Navbar = () => {

    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    return (
        <nav>
    <div className="nav-wrapper blue darken-1 style={{ padding: '0 2rem' }}">
          <img src="shoot.png" alt="logo"  height="60" style={{ padding: 5}}  />
          <span className="brand-logo">Shooter-club: OnLine portal</span>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/digitaltablet">DigitalTablet</NavLink></li>
        <li><NavLink to="/scorepage">Score</NavLink></li>
        
        <li><a href="/" onClick={logoutHandler}>LogOut</a></li>
        
      </ul>
    </div>
  </nav>
    )
}