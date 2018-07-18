import React, { Fragment } from 'react'
import FaEmail from 'react-icons/lib/fa/envelope-o'
import { FooterContainer,ContentH1, EmailBtn } from '../../styles/Footer'

const Footer = () => (
    <Fragment>
        <FooterContainer>
            <ContentH1>
                <span>Web</span>
                <span>Developer</span>
            </ContentH1>
            <EmailBtn
                href="mailto:sunildy@gmail.com?Subject=Hello%20again" target="_top"
            >
                Say Hello!<FaEmail/>
            </EmailBtn>
            <div>
                <p>Made with <span style={{color:"red"}}>♥</span> and hosted on <a
                    style={{color: "#333"}}
                    href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">
                    Netlify
                    </a>
                </p>
            </div>
        </FooterContainer>
    </Fragment>
)

export default Footer;