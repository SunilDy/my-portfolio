import React, {Fragment} from 'react'
import FaGH from 'react-icons/lib/fa/github'
import FaInsta from 'react-icons/lib/fa/instagram'
import FaCodepen from 'react-icons/lib/fa/codepen'
import '../../styles/Social.css'

const SocialLinks = () => {
    return (
        <Fragment>
            <div className="container">
            <h3 className="sub-title">Find Me</h3>
            <div className="social">

                <div className="social-link">
                    <a href="https://github.com/SunilDy" target="_blank" rel="noopener noreferrer">
                        <div>
                            <FaGH color="#24292E" style={{fontSize:"60px"}}/><br/>
                            <p id="s-title">Github</p>
                        </div>
                    </a>
                </div>


                <div className="social-link">
                <a href="https://www.instagram.com/sunil_dy" target="_blank" rel="noopener noreferrer">
                    <div>
                        <FaInsta color="#24292E" style={{fontSize:"60px"}}/><br/>
                        <p id="s-title">Instagram</p>
                    </div>
                </a>
                </div>

                <div className="social-link">
                <a href="https://codepen.io/SunilDy/" target="_blank" rel="noopener noreferrer">
                    <div>
                        <FaCodepen color="#24292E" style={{fontSize:"60px"}}/><br/>
                        <p id="s-title">Codepen</p>
                    </div>
                </a>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default SocialLinks;