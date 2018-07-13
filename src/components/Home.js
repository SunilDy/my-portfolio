import React, { Component } from 'react';


import { Helmet } from 'react-helmet'

// Components
    import SocialLinks from './HomeComps/SocialLinks'
    import Intro from './HomeComps/Intro'
    import Footer from './HomeComps/Footer'
    import Skills from './HomeComps/Skills'

class Home extends Component {

    render () {
        return (
            <div className="container">

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