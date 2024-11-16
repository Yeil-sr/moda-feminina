import React from 'react';
import './Navbar.css';
import navlogo from '../../assets/nav-logo.svg';
import navProfile from '../../assets/nav-profile.svg';

const Navbar = () => {
    const redirectToHome = () => {
        window.location.href = "http://localhost:3000/";
    };

    return (
        <div className='navbar'>
            <img src={navlogo} className="nav-logo" alt="Logo" onClick={redirectToHome} />
            <img src={navProfile} className='nav-profile' alt="Profile" onClick={redirectToHome} />
        </div>
    );
};

export default Navbar;
