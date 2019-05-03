import React from 'react'
import styled, { css } from 'styled-components'
import media from '../../lib/media'
import PropTypes from 'prop-types'

const paths = [
    'M1.29,26.49C-2.26,41.41.74,72.41,20.05,81.25,43.5,92,63.69,78.76,74.75,62.32c6-8.91,6.56-35.25-18.76-54.76C33.74-9.59,6.44,4.88,1.29,26.49Z',
    'M1.39,26.58C-1.44,52.11-2,79.47,20.15,81.34c25.68,2.17,51.08.55,54.7-18.93,5-26.9,6.56-35.25-18.76-54.76C33.83-9.49,3.83,4.51,1.39,26.58Z',
    'M8,23.36c-18.36,18-2.32,47.78,18.76,54.75,21.69,7.17,44.69-1.83,54.7-18.92,13-22.15,8-41.91-18.76-54.76C37.46-7.72,24.48,7.28,8,23.36Z',
]

const Wrapper = styled('div')`
  position: relative;
  width: 40px;
  height: 40px;
  transition: all 2s linear;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.tablet(css`
    width: 55px;
    height: 55px;
    `)};

    ${media.desktop(css`
        width: ${props => props.radius + props.radius * 0.2}px;
        height: ${props => props.radius + props.radius * 0.2}px;
    `)};
`

const FallbackBubble = styled('div')`
  width: 40px;
  height: 40px;
  background-color: ${ props => props.theme.color.ui.primary };
  border-radius: 50%;
  position: absolute;

  ${media.tablet(css`
        width: 50px;
        height: 50px;
    `)};

    ${media.desktop(css`
        width: ${props => props.radius}px;
        height: ${props => props.radius}px;
    `)};
`

const Ball = styled('div').attrs({
    style: props => ({
        transform: `translate(${props.position[0]}px, ${props.position[1]}px)`,
        width: `${props.radius}px`,
        height: `${props.radius}px`
    })
})`
  position: absolute;
  border-radius: 100%;
  background-color: #FFC539;
  transition: all 2s linear;
`

const randomNumber = (range) => {
    return Math.floor(Math.random() * range[1]) + range[0]
}

const createBallsArray = (numberOfBalls, radius) => {
    let arr = []
    const range = [-radius * 0.125, radius * 0.25]
    for (let i = 0; i < numberOfBalls; i++) { arr.push([randomNumber(range), randomNumber(range)]) }
    return arr
}

const balls = createBallsArray(5)
const isChrome = !!window.chrome && !!window.chrome.webstore;
class Plasma extends React.Component {
    state = {
        path: paths[0],
        positions: createBallsArray(5, this.props.radius)
    }

    static propTypes = {
        radius: PropTypes.number
    }

    static defaultProps = {
        radius: 80
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({positions: createBallsArray(5, this.props.radius)})
        }, 2000)
    }

    render () {
        return (
            <Wrapper radius={this.props.radius}>
                {isChrome 
                    ? <div style={{filter: `url('#goo')`, position: 'absolute', left: 8, top: 8}}>
                        {balls.map((ball, index) => <Ball radius={this.props.radius} position={this.state.positions[index]} key={index + ball}/>)}
                    </div>
                    : <FallbackBubble radius={this.props.radius * 1.2} />
                }
            
                <div style={{ zIndex: 1, }}>
                    {this.props.children}
                </div>
            </Wrapper>
        )

    }
}

export default Plasma