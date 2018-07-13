import React, {Fragment} from 'react'
import FaGH from 'react-icons/lib/fa/github'
import FaInsta from 'react-icons/lib/fa/instagram'
import FaCodepen from 'react-icons/lib/fa/codepen'

const SocialLinks = () => {
    return (
        <Fragment>
            <h3 className="intro-h2">Social Links</h3>
            <div className="social">

                <div id="gh">
                    <a href="https://github.com/SunilDy" target="_blank" rel="noopener noreferrer">
                        <div>
                            <FaGH color="white" style={{fontSize:"60px"}}/><br/>
                            <p id="s-title">Github</p>
                        </div>
                    </a>
                </div>


                <div id="insta">
                <a href="https://www.instagram.com/sunil_dy" target="_blank" rel="noopener noreferrer">
                    <div>
                        <FaInsta color="white" style={{fontSize:"60px"}}/><br/>
                        <p id="s-title">Instagram</p>
                    </div>
                </a>
                </div>

                <div id="codepen">
                <a href="https://codepen.io/SunilDy/" target="_blank" rel="noopener noreferrer">
                    <div>
                        <FaCodepen color="white" style={{fontSize:"60px"}}/><br/>
                        <p id="s-title">Codepen</p>
                    </div>
                </a>
                </div>
            </div>
        </Fragment>
    )
}

export default SocialLinks;