import React from 'react'
import styled, { css } from 'styled-components'
import media from '../../lib/media'
import { ContentWrapper } from '../../components/Grid/ContentWrapper'
import Plasma from '../../components/Plasma'
import { H1 } from '../../components/Text'
import Button from '../../components/Button'
import IllustrationJumboBottom, {
    IllustrationMountain,
} from '../../assets/svg/IllustrationJumboBottom.js'
import withTheme from '../../theme'
import IllustrationJumbo from '../../assets/svg/IllustrationJumbo.js'
import IllustrationSun from '../../assets/svg/IllustrationSun.js'

import { THEME_DARK, THEME_LIGHT } from '../../theme/constants'

export const IllustrationBackground = styled('div')`
    width: 100%;
    background-image: linear-gradient(-129deg, #21956e 0%, #82b86a 100%);
    height: 285px;

    ${media.tablet(css`
        height: 400px;
    `)};

    ${media.desktop(css`
          height: 600px;
	`)};
`
const Buttom2 = styled(Button)`
    font-size: 12px;
    letter-spacing: 0;
    padding: 0 1.3rem;
    margin-top: 18px;
    height: 34px;
    line-height: 34px;


    ${media.tablet(css`
        font-size: 15px;
        padding: 0 2rem;
        margin-top: 8px;
        height: 40px;
        line-height: 40px;
    `)};
    
    ${media.desktop(css`
        letter-spacing: 1.5px;
	`)};
`

export const IllustrationBottom = styled(IllustrationJumboBottom)`
    bottom: -50px;
    position: absolute;
    z-index: 0;

     ${media.tablet(css`
        bottom: 0;
    `)};
`



const Illustration = styled(IllustrationJumbo)`
    position: absolute;
    bottom: -95px;
    width: calc(100% - 20px);
    left: 10px;
    z-index: 1;
    
    ${media.tablet(css`
        bottom: -18px;
        left: 100px;
        width: calc(100% - 195px);
    `)};

    ${media.desktop(css`
        bottom: -15px;
        width: 100%;
        left: 0;
    `)}

   
`

const ContentWrapperStyle2 = styled(ContentWrapper)`
    padding: 0 18px;
    ${media.tablet(css`
        padding: 0 84px;
    `)};
    
    ${media.desktop(css`
         padding: 0 32px;
	`)};
`

export const IllustrationBottomMountain = styled(IllustrationMountain)`
    position: absolute;
    top: 170px;
    left:0;
`

export const Wrapper = styled('div')`
    display: flex;
    position: relative;
    align-content: center;
    justify-content: center;
    margin-top: 64px;
    // overflow: hidden;


     ${media.tablet(css`
    `)};
    
    ${media.desktop(css`
          margin-top: 70px;
	`)};
`

const TextWrapper = styled('div')`
    position: absolute;
    width: 100%;
    margin: 55px auto 0;

    ${media.tablet(css`
        margin: 48px auto 0;
    `)};

     ${media.desktop(css`
        margin: 160px auto 0;
    `)};
`

const PlasmaWrapper = styled('div')`
    position: absolute;
    top:0;
    left: 30px;
        transform: translateX(-30%);


    ${media.tablet(css`
        left: 30px;
        transform: translateY(-25%);
    `)};
    
    ${media.desktop(css`
        left: auto;
        transform: translateX(-55%) translateY(-25%);
    `)};
    
    svg{
      height: 135px;
       width: 260px;

        ${media.tablet(css`
            width: 360px;
        `)};


        ${media.desktop(css`
            width: auto;
    `)};
    }
`

const Jumbotron = () => {
    return (
        <Wrapper>
            <PlasmaWrapper>
                <IllustrationSun />
            </PlasmaWrapper>
            <TextWrapper>
                <ContentWrapperStyle2>
                    <H1>
                        {' '}
                        Delivering efficient and clean <br/>
                        energy for a sustainable planet{' '}
                    </H1>
                    <Buttom2 mt={2} route="/map">
                        {' '}
                        SEE OUR PROJECTS{' '}
                    </Buttom2>
                </ContentWrapperStyle2>
            </TextWrapper>
            <IllustrationBackground />
            <IllustrationBottom />
            <IllustrationBottomMountain />
            <Illustration />
        </Wrapper>
    )
}

export default withTheme(Jumbotron, THEME_DARK)
