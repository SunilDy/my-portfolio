import React, { Fragment } from 'react'
import '../../styles/Skills.css'

const Skills = () => (
    <Fragment>
        <div className="container">
            <h2 className="sub-title">Skills</h2>
            <div className="skills-container">

                <div className="front-end">
                    <h3 className="skill-title">Frontend</h3>
                        <div className="skills">
                            <p>HTML5</p>
                            <p>CSS 3 (Grid,Flex)</p>
                            <p>Bootstrap</p>
                            <p>React.js</p>
                            <p>Redux</p>
                            <p>Apollo Client</p>
                            <p>Gatsby</p>
                        </div>
                </div>

                <div className="back-end">
                    <h3 className="skill-title">Backend</h3>
                    <div className="skills">
                            <p>Node.js</p>
                            <p>Express.js</p>
                            <p>MongoDB</p>
                            <p>GraphQL</p>
                            <p>Web Sockets</p>
                            <p>Apollo Server</p>
                            <p>GraphQL Yoga</p>
                    </div>
                </div>

                <div className="deploy">
                    <h3 className="skill-title">Deployment Skills</h3>
                    <div className="skills">
                            <p>Heroku</p>
                            <p>ZEIT Now</p>
                            <p>Netkify</p>
                            <p>Git and Github</p>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
)

export default Skills;