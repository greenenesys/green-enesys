import React from 'react'
import styled from 'styled-components'
import PlasmaFigures from './PlasmaFigures'
import AboutUs from './AboutUs'
import Mission from './Mission'
import Carousel from './Carousel'
import Jumbotron from './Jumbotron'
import Solutions from './Solutions'

export default class HomePage extends React.Component {
    componentDidMount = () => {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div style={{ marginBottom: '128px' }}>
                <Jumbotron />
                <PlasmaFigures />
                <Carousel />
                <AboutUs />
                <Mission />
                <Solutions />
            </div>
        )
    }
}
