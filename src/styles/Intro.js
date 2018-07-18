import styled from  'styled-components'
import {mainColor} from './RootStyle'
import { media } from './Media'

const TitleContainer = styled.div`
    background-color: ${mainColor};
    width: fit-content;
    padding: 0 70px;

    ${media.$1040`
        padding: 0 50px;
    `}

    @media screen and (max-width: 370px) {
        padding: 0 50px;
    }
`;

const IntroDiv = styled.section`
    max-width: 70%;
    margin-bottom: 4em;

    ${media.$1040`
        max-width: 85%;
    `}

    @media screen and (max-width: 900px) {
        max-width: 100%
    }
`

const IntroH2 = styled.h2`
    font-weight: bold;
    font-size: 60px;
    color: white;
    font-family: 'Space Mono','Hind', sans-serif;

    ${media.$1040`
        font-size: 40px;
    `}

    @media screen and (max-width: 370px) {
        font-size: 30px;
    }
    @media screen and (max-width: 300px) {
        font-size: 25px;
    }
`

const IntroP = styled.h4`
    font-weight: 1;
    font-size: 20px;
    opacity: .8;

    ${media.$1040`
        font-size: 18px;
    `}
    @media screen and (max-width: 800px) {
        font-size: 17px;
    }
    @media screen and (max-width: 600px) {
        font-size: 16px;
    }
`

const TwitterBtn = styled.a`
    padding: 5px 10px;
    background-color: #1DA1F2;
    color: white;
    text-decoration: none;
    border-radius: 2px;
    font-size: 20px;

    @media screen and (max-width: 800px) {
        font-size: 18px;
    }
    @media screen and (max-width: 300px) {
        font-size: 15px;
    }
`;

export {
    TitleContainer,IntroH2,IntroDiv,IntroP,TwitterBtn
}