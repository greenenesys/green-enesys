import React from 'react'
import styled from 'styled-components'
import { ContentWrapper } from '../../components/Grid/ContentWrapper'
import Plasma from '../../components/Plasma'
import { H1 } from '../../components/Text'
import Button from '../../components/Button'
import IllustrationJumboBottom from '../../assets/svg/IllustrationJumboBottom.js'
import withTheme from '../../theme'
import IllustrationJumbo from '../../assets/svg/IllustrationJumbo.js'
import IllustrationSun from '../../assets/svg/IllustrationSun.js'

import {THEME_DARK, THEME_LIGHT} from '../../theme/constants'


const IllustrationBackground = styled('div')`
    width: 100%;
    background-image: linear-gradient(-129deg, #21956E 0%, #82B86A 100%);
    height: 600px;
`

const IllustrationBottom = styled(IllustrationJumboBottom)`
    bottom: 0;
    position: absolute;
`

const Illustration = styled(IllustrationJumbo)`
  position: absolute;
  bottom: -15px;
`

const Wrapper = styled('div')`
    display: flex;
    position: relative;
    align-content: center;
    justify-content: center;
    margin-top: 64px;
`

const TextWrapper = styled('div')`
  position: absolute;
  width: 100%;
  margin: 0 auto;
`

const PlasmaWrapper = styled('div')`
  position: absolute;
  margin-top: 64px;
  transform: translateX(-55%) translateY(-40%);
`

const Jumbotron = ( ) => {
    return (
        <Wrapper>
            <PlasmaWrapper>
                <IllustrationSun />
            </PlasmaWrapper>
            <TextWrapper>
                <ContentWrapper mt={160}>
                    <H1> Delivering efficient and clean <br/>
                        energy for a sustainable planet. </H1>
                    <Button mt={2}> Explore our projects </Button>
                </ContentWrapper>
            </TextWrapper>
            <IllustrationBackground />
            <IllustrationBottom />
            <Illustration />
        </Wrapper>
    )
}

export default withTheme(Jumbotron, THEME_DARK)