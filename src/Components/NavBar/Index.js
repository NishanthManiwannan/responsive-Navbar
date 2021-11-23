import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

const Navbar = () => {
    return (
        <div>
            <Nav>

                <NavLink to="/">
                    <h1>Logo</h1>
                    {/* <img src={require('../')} alt='logo' /> */}
                </NavLink>

                <Bars></Bars>

                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>

                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>

                    <NavLink to="/contact-us" activeStyle>
                        Contact
                    </NavLink>

                    <NavLink to="/sign-up" activeStyle>
                        Sign up
                    </NavLink>

                    {/* 2nd Nav right 2 button */}
                    <NavBtnLink to="signin">Sign-in</NavBtnLink>

                </NavMenu>

                {/* Center the nav links */}
                {/* <NavBtn>
                    <NavBtnLink to="signin">Sign-in</NavBtnLink>
                </NavBtn> */}

            </Nav>
        </div>
    )
}

export default Navbar
