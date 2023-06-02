import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

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
                    <li>Home</li>
                    <li>Products</li>
                    <li>Contact</li>
                    <li>Login</li>
                </ul>
            </nav>
            <GiHamburgerMenu onClick={clickHandler}/>  
            {
                openMobileMenu && (
                    <div className='div-mobile-menu'>
                        <div className='div-mobile-menu-inner'>
                            <button onClick={clickHandler}>X</button>
                            <ul>
                                <li>Home</li>
                                <li>Products</li>
                                <li>Contact</li>
                                <li>Login</li>
                            </ul>
                        </div>
                    </div>
                )
            }
        </div>
    )

}