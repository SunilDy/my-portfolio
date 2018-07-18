import styled from 'styled-components'
import { mainColor } from './RootStyle'

const FooterContainer = styled.footer`
    margin-top: 40px;
    text-align: center;
    padding: 0 5px;
`
const ContentH1 = styled.h1`
    font-size: calc(1em + 12vw);
    letter-spacing: -0.15em;
    display: grid;

    & span:nth-of-type(1) {
        grid-row: 2;
        grid-column: 1/3;
        margin-left: -1.14em;
        color: ${mainColor};
        position: relative;
        font-weight: bolder;
        font-family: 'Space Mono','Hind', sans-serif;
    }

    & span:nth-of-type(2) {
        grid-row: 2;
        grid-column: 2/4;
        margin-left: -0.07em;
        color: #425A50;
        font-weight: lighter;
        font-family: 'Space Mono','Hind', sans-serif;
    }
`

const EmailBtn = styled.a`
    text-decoration: none;
    font-size: 18px;
    justify-content: center;
    background-color: var(--main-color);
    padding: 7px 20px;
    border-radius: 4px;
    color: white;
`

export {
    FooterContainer,ContentH1, EmailBtn
}