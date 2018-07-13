import React, { Fragment } from 'react'

const Skills = () => (
    <Fragment>
        <h2 className="intro-h2">Skills</h2>
        <div className="skills-container">

            <div className="skill-icon-container" id="react">
                <p className="skill-title">React.js</p>
                <i class="devicon-react-original skills-icon"></i>
            </div>

            <div className="skill-icon-container" id="node">
                <p className="skill-title">Node.js</p>
                <i class="devicon-nodejs-plain skills-icon"></i>
            </div>

            <div className="skill-icon-container" id="javascript">
                <p className="skill-title">JavaScript</p>
                <i class="devicon-javascript-plain skills-icon"></i>
            </div>

            <div className="skill-icon-container" id="mongodb">
                <p className="skill-title">MongoDB</p>
                <i class="devicon-mongodb-plain skills-icon"></i>
            </div>

            <div className="skill-icon-container" id="css3">
                <p className="skill-title">CSS3</p>
                <i class="devicon-css3-plain skills-icon"></i>
            </div>

            <div className="skill-icon-container" id="html5">
                <p className="skill-title">HTML5</p>
                <i class="devicon-html5-plain skills-icon"></i>
            </div>

            <div className="skill-icon-container" id="bootstrap">
                <p className="skill-title">Bootstrap</p>
                <i class="devicon-bootstrap-plain skills-icon"></i>
            </div>

            <div className="skill-icon-container" id="graphql">
                <p className="skill-title">GraphQL</p>
            </div>

            <div className="skill-icon-container" id="apollo">
                <p className="skill-title">Apollo</p>
            </div>

            <div className="skill-icon-container" id="git">
                <p className="skill-title">Git</p>
                <i class="devicon-git-plain skills-icon"></i>
            </div>

            <div className="skill-icon-container" id="express">
                <p className="skill-title">Express.js</p>
                <i class="devicon-express-original skills-icon"></i>
            </div>

            <div className="skill-icon-container" id="heroku">
                <p className="skill-title">Heroku</p>
                <i class="devicon-heroku-plain skills-icon"></i>
            </div>

        </div>
    </Fragment>
)

export default Skills;