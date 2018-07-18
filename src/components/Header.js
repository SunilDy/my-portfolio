import React from 'react'
// import '../styles/Nav.css'
import { NavContainer, StyledLink, LinkA } from '../styles/Nav'
import { Container } from '../styles/RootStyle'

// const LinkStyle = {
//     textDecoration: 'none',
//     color: '#999',
//     fontSize: '20px',
//     paddingLeft: '2em'
// }

const Header = () => {
    return (
        <Container>
                <NavContainer>
                    <StyledLink to="/"
                        // activeStyle={{ color: '#333', fontWeight:"bold"}}
                    >
                        PORTFOLIO
                    </StyledLink>

                    <StyledLink to="/projects"
                        // activeStyle={{ color: '#333', fontWeight:"bold"}}
                    >
                        PROJECTS
                    </StyledLink>
                    <LinkA
                        href="mailto:sunildy@gmail.com?Subject=Hello%20again" target="_top"
                    >
                        EMAIL
                    </LinkA>
                </NavContainer>
        </Container>
    )
}

export default Header;