import React, { useState, useContext, useRef } from 'react'; // Added useRef import
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
// import dropdown from '../../Assets/dropdown_icon.png'; // Updated path

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const { getTotalCartAmount } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => { // Added e as a parameter
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
                <p>MODA <br/> ÍNTIMA</p>
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
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'>
                    <img src={cart_icon} alt="Cart" />
                </Link>
                <div className="nav-cart-count">{getTotalCartAmount()}</div>
            </div>
        </div>
    );
};

export default Navbar;
