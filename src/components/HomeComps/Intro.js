import React, { Fragment } from 'react'
import FaTwitter from 'react-icons/lib/fa/twitter'

const Intro = () => (
    <Fragment>
        <section id="intro">
            <h2 className="intro-h2">Hey There!</h2>
            <p id="intro-h4">I am Sunil,<br/>
                I'm an aspiring Full Stack JavaScript Web Developer based in Odisha, India. Currently doing my Computer Science graduation and working as an intern at INFONIX.
            </p>
            <a class="twitter" href="https://twitter.com/sunildy9">
                <FaTwitter color="white"/> Follow
            </a>
        </section>
    </Fragment>
)

export default Intro;