import React from 'react'
import Logo from '../images/Logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <img src={Logo} alt="logo" />
                </li>

                <li>
                    <p className="username">
                        Welcome Mukesh
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
