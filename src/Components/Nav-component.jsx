import { useState, useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom';

export const NavComponent = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const clickHandler = () => {
        setOpenMobileMenu(!openMobileMenu)
    }

    return (
        <div className="nav-div">
            <h1>Best Wine</h1>
            <nav className="nav-desktop">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
            <GiHamburgerMenu onClick={clickHandler}/>  
            {
                openMobileMenu && (
                    <div className='div-mobile-menu'>
                        <div className='div-mobile-menu-inner'>
                            <button onClick={clickHandler}>X</button>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/products">Products</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/login">Login</Link></li>
                            </ul>
                        </div>
                    </div>
                )
            }
        </div>
    )

}