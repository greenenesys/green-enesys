import React from 'react'
import styled from 'styled-components'
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
    height: 600px;
`

export const IllustrationBottom = styled(IllustrationJumboBottom)`
    bottom: 0;
    position: absolute;
    z-index: 0;
`

const Illustration = styled(IllustrationJumbo)`
    position: absolute;
    bottom: -15px;
    z-index: 1;
`

export const IllustrationBottomMountain = styled(IllustrationMountain)`
    position: absolute;
    top: 170px;
`

export const Wrapper = styled('div')`
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

const Jumbotron = () => {
    return (
        <Wrapper>
            <PlasmaWrapper>
                <IllustrationSun />
            </PlasmaWrapper>
            <TextWrapper>
                <ContentWrapper mt={160}>
                    <H1>
                        {' '}
                        Delivering efficient and clean <br />
                        energy for a sustainable planet.{' '}
                    </H1>
                    <Button mt={2} route="/map">
                        {' '}
                        Explore our projects{' '}
                    </Button>
                </ContentWrapper>
            </TextWrapper>
            <IllustrationBackground />
            <IllustrationBottom />
            <IllustrationBottomMountain />
            <Illustration />
        </Wrapper>
    )
}

export default withTheme(Jumbotron, THEME_DARK)
