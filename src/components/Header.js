import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="container">
                <div id="project-container">
                    <NavLink to="/" className="navlink"
                        activeStyle={{ color: '#333', fontWeight:"bold"}}>
                        PORTFOLIO
                    </NavLink>

                    <NavLink to="/projects" className="navlink"
                        activeStyle={{ color: '#333', fontWeight:"bold"}}>
                        PROJECTS
                    </NavLink>
                </div>
        </div>
    )
}

export default Header;