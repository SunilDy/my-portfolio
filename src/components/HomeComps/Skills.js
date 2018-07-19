import React, { Fragment } from 'react'
import { Container,SubTitle } from '../../styles/RootStyle'
import { SkillsContainer,SkillTitle,SkillsNames } from '../../styles/Skills'

const Skills = () => (
    <Fragment>
        <Container>
            <SubTitle>SKILLS</SubTitle>
            <SkillsContainer>

                <div>
                    <SkillTitle>Frontend</SkillTitle>
                        <SkillsNames>
                            <p>HTML5</p>
                            <p>CSS3(Grid,Flex)</p>
                            <p>Bootstrap</p>
                            <p>React.js</p>
                            <p>Redux</p>
                            <p>Apollo-Client</p>
                            <p>Gatsby</p>
                        </SkillsNames>
                </div>

                <div>
                    <SkillTitle>Backend</SkillTitle>
                    <SkillsNames>
                            <p>Node.js</p>
                            <p>Express.js</p>
                            <p>MongoDB</p>
                            <p>GraphQL</p>
                            <p>Web-Sockets</p>
                            <p>Apollo-Server</p>
                            <p>GraphQL-Yoga</p>
                    </SkillsNames>
                </div>

                <div>
                    <SkillTitle>Deployment Skills</SkillTitle>
                    <SkillsNames>
                            <p>Heroku</p>
                            <p>ZEIT-Now</p>
                            <p>Netkify</p>
                            <p>Git-and-Github</p>
                    </SkillsNames>
                </div>
            </SkillsContainer>
        </Container>
    </Fragment>
)

export default Skills;