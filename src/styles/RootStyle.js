import styled from 'styled-components'
import {media} from './Media'

const mainColor = '#22E792';

const Container = styled.div`
    margin: 20px 100px;

    @media screen and (max-width: 600px) {
        margin: 20px 60px;
    }
    @media screen and (max-width: 475px) {
        margin: 20px 25px;
    }
`

const SubTitle = styled.h2`
    color: ${mainColor};
    font-size: 30px;
    margin-bottom: 0;
    font-weight: bolder;
    font-family: 'Space Mono','Hind', sans-serif;

    ${media.$1040`
        font-size: 28px;
    `}
`

export {
    mainColor, Container, SubTitle
}