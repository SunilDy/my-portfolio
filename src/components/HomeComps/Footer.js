import React, { Fragment } from 'react'
import '../../styles/Footer.css'
import FaEmail from 'react-icons/lib/fa/envelope-o'

const Footer = () => (
    <Fragment>
        <footer>
            <h1 className="content">
                <span>Web</span>
                <span>Developer</span>
            </h1>
            <a
                href="mailto:sunildy@gmail.com?Subject=Hello%20again" target="_top"
                id="email"
            >
                Say Hello!<FaEmail/>
            </a>
            <div>
                <p>Made with <span style={{color:"red"}}>♥</span> and hosted on <a
                    style={{color: "#333"}}
                    href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">
                    Netlify
                    </a>
                </p>
            </div>
        </footer>
    </Fragment>
)

export default Footer;