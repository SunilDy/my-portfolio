import React, { Fragment } from 'react'
import FaTwitter from 'react-icons/lib/fa/twitter'
import {
    TitleContainer ,IntroH2, IntroDiv, IntroP, TwitterBtn
} from '../../styles/Intro.js'
import { Container,SubTitle } from '../../styles/RootStyle'

const Intro = () => (
    <Fragment>
        <TitleContainer>
            <IntroH2>Hey There!</IntroH2>
        </TitleContainer>
        <Container>
            <IntroDiv>
                <SubTitle>ABOUT ME</SubTitle>
                <IntroP>I'm Sunil Kumar,<br/>
                I'm an aspiring Full-Stack JavaScript Web Developer
                based in Odisha, India, Currently doing my Computer
                Science graduation and working as an intern at Infonix.
                </IntroP>
                <IntroP>
                I make Progressive and highly performant Web apps with
                modern JavaScript frameworks like React.js, and
                static site generators like Gatsby and wire them up with
                powerful backend languages like Node.js and highly performant
                Databases such as MongoDB and prototype flexible API's using
                GraphQL and I always make sure there's no bug left behind :)
                </IntroP>
                <TwitterBtn href="https://twitter.com/sunildy9">
                    <FaTwitter color="white"/> Follow me!
                </TwitterBtn>
            </IntroDiv>
        </Container>
    </Fragment>
)

export default Intro;