import styled from 'styled-components'
import { media } from './Media'


const SkillsContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(3, minmax(70px, 1fr));
    grid-gap: 20px;
    margin-bottom: 10em;

    & > * {
        height: 200px;
        text-align: left;
        padding: 0 1em;

        @media screen and (max-width:300px) {
            margin-bottom: 3em;
        }
    }

    @media screen and (max-width:900px) {
        display: block;
        margin-bottom: 0;
    }

    @media screen and (max-width:530px) {
        margin-bottom: 0;
    }
`

const SkillTitle = styled.h3`
    font-weight: bold;
    text-decoration: underline;
    font-size: 26px;

    ${media.$1040`
        font-size: 22px;
    `}
`

const SkillsNames = styled.div`
    font-size: 20px;
    line-height: 15px;

    ${media.$1040`
        font-size: 18px;
    `}

    @media screen and (max-width:900px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 20px;
        line-height: 0;
    }

    @media screen and (max-width:740px) {
        font-size: 16px;
    }
    @media screen and (max-width:708px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:300px) {
        display: block;
        line-height: 10px;
    }
`

export {
    SkillsContainer,SkillTitle,SkillsNames
}