import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.styles.scss'
import Dropdown from './dropdown'
import { Button } from '../button/button';

function Navbar() {
    const [click, setClick] = useState(false)
    const[dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        }else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        }else {
            setDropdown(false);
        }
    };

    return(
    <>
        <nav className='navbar'>
            <Link to ='/'
            className='navbar-logo'>
                YalSiss
            </Link>

            
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'} >
            <li className='nav-item'>
            <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
            Home
            </Link>
            </li>

            <li className='nav-item'>
            <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
            Home2 
            </Link>
            </li>

            <li className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
            <Link to ='/' className='nav-links' onClick={closeMobileMenu} >
            Home3 <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
            </li>

            <li className='nav-item'>
            <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
            Contact Us
            </Link>
            </li>

            <li className='nav-item'>
            <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
            About
            </Link>
            </li>

            
            </ul>
            <Link className="sig" to="/signup">
            <Button>Sign Up</Button>
            </Link>
            <Link className="sig" to="/login">
            <Button>Log In</Button>
            </Link>
        </nav>
    </>
    );
}

export default Navbar;