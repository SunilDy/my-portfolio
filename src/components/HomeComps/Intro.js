import React, { Fragment } from 'react'
import FaTwitter from 'react-icons/lib/fa/twitter'
import '../../styles/Intro.css'

const Intro = () => (
    <Fragment>
        <div id="title-container">
            <h2 className="intro-h2">Hey There!</h2>
        </div>
        <div className="container">
            <section id="intro">
                <h2 className="sub-title">ABOUT ME</h2>
                <p className="intro-h4">I'm Sunil Kumar,<br/>
                I'm an aspiring Full-Stack JavaScript Web Developer
                based in Odisha, India, Currently doing my Computer
                Science graduation and working as an intern at Infonix.
                </p>
                <p className="intro-h4">
                I make Progressive and highly performant Web apps with
                modern JavaScript frameworks like React.js, and
                static site generators like Gatsby and wire them up with
                powerful backend languages like Node.js and highly performant
                Databases such as MongoDB and prototype flexible API's using
                GraphQL and I always make sure there's no bug left behind :)
                </p>
                <a className="twitter" href="https://twitter.com/sunildy9">
                    <FaTwitter color="white"/> Follow me!
                </a>
            </section>
        </div>
    </Fragment>
)

export default Intro;