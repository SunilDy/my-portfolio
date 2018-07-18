import React, { Component } from 'react';
import '../MediaQuery/Media.css'

import { Helmet } from 'react-helmet'

// Components
    import SocialLinks from './HomeComps/SocialLinks'
    import Intro from './HomeComps/Intro'
    import Footer from './HomeComps/Footer'
    import Skills from './HomeComps/Skills'

class Home extends Component {

    render () {
        return (
            <div>

                <Helmet>
                    <title>Sunil Kumar - Portfolio</title>
                </Helmet>

                <Intro />
                <Skills />
                <SocialLinks />
                <Footer />

            </div>
        )
    }
}

export default Home;