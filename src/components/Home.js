import React, { Component } from 'react';
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaGH from 'react-icons/lib/fa/github'
import FaInsta from 'react-icons/lib/fa/instagram'
import FaCodepen from 'react-icons/lib/fa/codepen'
import { Helmet } from 'react-helmet'

class Home extends Component {

    render () {
        return (
            <div className="container">
                <Helmet>
                    <title>Sunil Kumar - Portfolio</title>
                </Helmet>
                <section id="intro">
                    <h2 id="intro-h2">Hey There!</h2>
                    <p id="intro-h4">I am Sunil,<br/>
                        I'm an aspiring Full Stack JavaScript Web Developer based in Odisha, India. Currently doing my Computer Science graduation and working as an intern at INFONIX.
                    </p>
                    <a class="twitter" href="https://twitter.com/sunildy9">
                        <FaTwitter color="white"/> Follow
                    </a>
                </section>

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

            <footer>
                <p>Made with <span style={{color:"red"}}>♥</span> and hosted on <a
                        style={{color: "#333"}}
                        href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">
                        Netlify
                    </a>
                </p>
            </footer>

            </div>
        )
    }
}

export default Home;