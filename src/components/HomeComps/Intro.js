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
                <IntroP>I am Sunil Kumar,<br/>
                An aspiring Full-Stack Freelance JavaScript Web Developer
                based in Odisha, India. Currently doing my computer
                science graduation. Worked at Infonix for two years as an Front-end web developer.
                </IntroP>
                <SubTitle>WHAT I DO</SubTitle>
                <IntroP>
                I make progressive and high performance web apps with
                modern JavaScript frameworks like React.js, and
                static site generators like Gatsby and wire them up with
                powerful back-end languages like Node.js and highly scalable
                databases such as MongoDB and prototype flexible APIs using
                GraphQL. And I always make sure there's no bug left behind : )
                </IntroP>
                <TwitterBtn href="https://twitter.com/sunildy9">
                    <FaTwitter color="white"/> Follow me!
                </TwitterBtn>
            </IntroDiv>
        </Container>
    </Fragment>
)

export default Intro;