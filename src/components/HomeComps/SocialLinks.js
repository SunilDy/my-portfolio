import React, {Fragment} from 'react'
import FaGH from 'react-icons/lib/fa/github'
import FaInsta from 'react-icons/lib/fa/instagram'
import FaCodepen from 'react-icons/lib/fa/codepen'
import { Container,SubTitle } from '../../styles/RootStyle'
import { SocialDiv,P } from '../../styles/Social'

const SocialLinks = () => {
    return (
        <Fragment>
            <Container>
            <SubTitle>FIND ME</SubTitle>
            <SocialDiv>

                <div>
                    <a href="https://github.com/SunilDy" target="_blank" rel="noopener noreferrer">
                        <div>
                            <FaGH color="#24292E" style={{fontSize:"60px"}}/><br/>
                            <P>Github</P>
                        </div>
                    </a>
                </div>


                <div>
                <a href="https://www.instagram.com/sunil_dy" target="_blank" rel="noopener noreferrer">
                    <div>
                        <FaInsta color="#24292E" style={{fontSize:"60px"}}/><br/>
                        <P>Instagram</P>
                    </div>
                </a>
                </div>

                <div>
                <a href="https://codepen.io/SunilDy/" target="_blank" rel="noopener noreferrer">
                    <div>
                        <FaCodepen color="#24292E" style={{fontSize:"60px"}}/><br/>
                        <P>Codepen</P>
                    </div>
                </a>
                </div>
            </SocialDiv>
            </Container>
        </Fragment>
    )
}

export default SocialLinks;