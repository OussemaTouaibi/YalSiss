import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.styles.scss'
import Dropdown from './dropdown'
import { Button } from '../button/button';

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from '../../../actions/userActions'



const Navbar = ()  => {

const alert = useAlert();
const dispatch = useDispatch();

const { user, loading } = useSelector(state => state.auth)

const logoutHandler = () => {
    dispatch(logout());
    alert.success('Logged out successfully.')
}


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
    <Fragment>

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
            Accueil
            </Link>
            </li>

            <li className='nav-item'>
            <Link to ='/Home2' className='nav-links' onClick={closeMobileMenu}>
            Tous Nos Produits 
            </Link>
            </li>

            <li className='nav-item'>
            <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
            Contact
            </Link>
            </li>

            <li className='nav-item'>
            <Link to ='/about' className='nav-links' onClick={closeMobileMenu}>
            A Propos
            </Link>
            </li>

            </ul>
            {user ? (
                 <div className="ml-4 dropdown d-inline">
                 <Link to="#!" 
                 className="btn dropdown-toggle " 
                 style={{ textDecoration : "none",
                 color: '#003060',
                 marginBottom:'12%',
                   }}
                 type="button" 
                 id="dropDownMenuButton"
                  data-toggle="dropdown" 
                  aria-haspopup="true" 
                  aria-expanded="false">

                     <figure className="avatar avatar-nav">
                         <img
                             src={user.avatar && user.avatar.url}
                             alt={user && user.name}
                             className="rounded-circle"
                         />
                     </figure>
                     <span>{user && user.name}</span>
                 </Link>
                 <div className="dropdown-menu"  aria-labelledby="dropDownMenuButton">
                     
                 {user && user.role === 'admin' && (
                                    <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                                )}
                                <Link className="dropdown-item" to="/orders/me">Vos Commandes</Link>
                                <Link className="dropdown-item" to="/me">Votre Profile</Link>
                                <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}>
                                  Log Out
                                </Link>
                 </div>
                 </div>

            ) : !loading && <>
            <Link className="sig" to="/login">
            <Button>Connexion</Button>
            </Link>
            <Link className="sig" to="/signup">
            <Button>Créez un compte</Button>
            </Link>
            </>
            }
            
        </nav>

    </Fragment>
    
    );
}

export default Navbar;