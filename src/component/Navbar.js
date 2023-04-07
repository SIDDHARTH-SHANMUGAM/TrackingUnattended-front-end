import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChild, faBars, faHome, faSearch, faPeopleGroup, faBell, faUser} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  let menu
  let menuicon
  let menumask 

  if(showMenu)
  {
    menu = 
    <div className='menu-list'>
        <li>
          <Link to='/' className='nav-links' onClick={()=> setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={ faHome } className='link-icon'/> Home
            </Link>
        </li>
        <li>
          <Link to='/' className='nav-links' onClick={()=> setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={ faSearch } className='link-icon'/> Search
          </Link>
        </li>
        <li>
          <Link to='/' className='nav-links' onClick={()=> setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={ faPeopleGroup } className='link-icon'/> About Us
          </Link>
        </li>
        <li>
          <Link to='/' className='nav-links' onClick={()=> setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={ faBell } className='link-icon'/> Notification
          </Link>
        </li>
        <li>
          <Link to='/' className='nav-links' onClick={()=> setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={ faUser } className='link-icon'/> Profile
          </Link>
        </li>
    </div>

    menumask = <div className='menu-mask' onClick={()=> setShowMenu(!showMenu)}>  </div>
  }
  else
  {
    menuicon  = <FontAwesomeIcon icon={ faBars} onClick={()=> setShowMenu(!showMenu)} />
  }
  
  return (
    <>
      <nav  className='navbar'>
        <div className='navbar-container'>
          <div className='menu-icon'>
            { menuicon }
          </div>
          <Link to ="/" className='navbar-logo'>
            Track Unattend..
            <FontAwesomeIcon icon={ faChild} />
          </Link>
        </div>
        <div >
            { menumask }
            { menu }
        </div>
            
      </nav>
    </>
  )
}

export default Navbar