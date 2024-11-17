import React from 'react';
import './Navbar.css';
import navlogo from '../../assets/logo.png';
import navProfile from '../../assets/nav-profile.svg';

const Navbar = () => {
    const redirectToHome = () => {
        window.location.href = "https://moda-feminina-frontend.vercel.app/";
    };

    return (
        <div className='navbar'>
            <img src={navlogo} className="nav-logo" alt="Logo" onClick={redirectToHome} />
            <img src={navProfile} className='nav-profile' alt="Profile" onClick={redirectToHome} />
        </div>
    );
};

export default Navbar;
