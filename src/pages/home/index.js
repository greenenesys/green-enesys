import React from 'react'
import PlasmaFigures from './PlasmaFigures'
import AboutUs from './AboutUs'
import Mission from './Mission'
import Carousel from './Carousel'
import Jumbotron from './Jumbotron'
import Solutions from './Solutions'
import styled, { css } from 'styled-components'
import media from '../../lib/media'

const Wrapper = styled('div')`
        margin-bottom: 0;

    ${media.desktop(css`
        margin-bottom: 128px;
    `)};
`

export default class HomePage extends React.Component {
    componentDidMount = () => {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Wrapper>
                <Jumbotron />
                <PlasmaFigures />
                <Carousel />
                <AboutUs />
                <Mission />
                <Solutions />
            </Wrapper>
        )
    }
}
