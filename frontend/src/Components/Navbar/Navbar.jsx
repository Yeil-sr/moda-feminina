import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartAmount } = useContext(ShopContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const menuRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        const email = localStorage.getItem('user-email');
        if (email === 'admin123@email.com') {
            setIsAdmin(true);
        }
    }, []);

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    };

    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        localStorage.removeItem('user-email');
        navigate('/login');
        setIsAdmin(false);
    };

    return (
        <div className='navbar'>
            <div className="nav-logo" onClick={() => navigate('/')}>
                <img src={logo} alt="Logo" />
                <p>MODA <br /> ÍNTIMA</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src="" alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => setMenu("shop")}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
                    {menu === "shop" && <hr />}
                </li>
                <li onClick={() => setMenu("mens")}>
                    <Link style={{ textDecoration: 'none' }} to='/sutia'>Sutiã</Link>
                    {menu === "mens" && <hr />}
                </li>
                <li onClick={() => setMenu("womens")}>
                    <Link style={{ textDecoration: 'none' }} to='/lingerie'>Lingerie</Link>
                    {menu === "womens" && <hr />}
                </li>
                <li onClick={() => setMenu("kids")}>
                    <Link style={{ textDecoration: 'none' }} to='/calcinha'>Calcinha</Link>
                    {menu === "kids" && <hr />}
                </li>
            </ul>
            <div className="nav-login-cart">
                {isAdmin && (
                    <button onClick={() => navigate('https://moda-feminina-admin.vercel.app/')}>
                        Admin
                    </button>
                )}
                {localStorage.getItem('auth-token') ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <Link to='/login'><button>Login</button></Link>
                )}
                <Link to='/cart'>
                    <img src={cart_icon} alt="Cart" />
                </Link>
                <div className="nav-cart-count">{getTotalCartAmount()}</div>
            </div>
        </div>
    );
};

export default Navbar;
