import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={Styles.navBar}>
        <div className={Styles.upperNavBar}>
            <div>
                <img alt='logo' src='http://pluginspoint.com/demo/i-finger-preview/05_film-town/img/home1/logo.png' />
            </div>
            <div>
                <ul className={Styles.navbarLinks}>
                    <li><Link to='/'>Home</Link></li>
                </ul>
            </div>
        </div>
        <div className={Styles.lowerNavBar}>
            <SearchBar />
        </div>
    </header>
  )
}

export default Navbar