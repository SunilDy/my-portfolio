import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Nav.css'

const Header = () => {
    return (
        <div className="container">
                <div id="nav-container">
                    <NavLink to="/" className="navlink"
                        activeStyle={{ color: '#333', fontWeight:"bold"}}>
                        PORTFOLIO
                    </NavLink>

                    <NavLink to="/projects" className="navlink"
                        activeStyle={{ color: '#333', fontWeight:"bold"}}>
                        PROJECTS
                    </NavLink>
                    <a
                        style={{textDecoration:"none",color:"#999BB0"}}
                        href="mailto:sunildy@gmail.com?Subject=Hello%20again" target="_top"
                        className="navlink"
                    >
                        EMAIL
                    </a>
                </div>
        </div>
    )
}

export default Header;