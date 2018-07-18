import styled from 'styled-components'
import {media} from './Media'

const SocialDiv = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-between;

    @media screen and (max-width:530px) {
        display: block;
    }

    & > * {
    padding: 25px;
    border:2px solid #A19F9F;
    border-radius: 4px;
    flex-wrap: wrap;
    flex-basis: 220px;
    text-align: center;
    height: 100px;
    transition: .2s ease;
    background-color: #FCF9F9;

    ${media.$1040`
        flex-basis: 180px;
    `}

        @media screen and (max-width: 930px) {
            flex-basis: 160px;
        }

        @media screen and (max-width: 860px) {
            flex-basis: 140px;
        }
        @media screen and (max-width: 820px) {
            flex-basis: 120px;
        }
        @media screen and (max-width:740px) {
            flex-basis: 100px;
        }
        @media screen and (max-width:685px) {
            flex-basis: 85px;
        }
        @media screen and (max-width:640px) {
            flex-basis: 70px;
        }
        @media screen and (max-width:530px) {
            margin-bottom: 20px;
        }
        @media screen and (max-width: 475px) {
            width: 70%;
            margin: 0 auto;
            margin-bottom: 10px;
        }
    }

    & > * > a {
        text-decoration: none;
    }

    & > *:hover {
        box-shadow: 0 6px 15px #555;
        cursor: pointer;
        transform: scale(1.05);
    }
`;

const P = styled.p`
    color: #333;
    opacity: .8;
    font-size: 18px;

    @media screen and (max-width:685px) {
        font-size: 16px;
    }
`

export {
    SocialDiv, P
}