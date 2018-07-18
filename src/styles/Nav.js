import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import styledProperty from 'styled-property'
import { mainColor } from './RootStyle'

const NavContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
    margin-top: 2em;

    @media screen and (max-width:520px) {
        justify-content: space-around;
        padding: 0;
        text-decoration: none;
    }
    @media screen and (max-width:560px) {
        justify-content: center;
    }
`

const LinkStyle = styled(NavLink)`
    font-size: 20px;
    text-decoration: none;
    color: #555;
    padding-left: 20px;

    &[data-active] {
        color: red;
        font-weight: bolder;
    }
    @media screen and (max-width:400px) {
        font-size: 18px;
    }
`

const StyledLink = styledProperty(LinkStyle, 'activeClassName')`
    color: ${mainColor}
`

const LinkA = styled.a`
    font-size: 20px;
    color: #555;
    text-decoration: none;
    padding-left: 20px;

    @media screen and (max-width:400px) {
        font-size: 18px;
    }
`

export {
    NavContainer, StyledLink, LinkA
}