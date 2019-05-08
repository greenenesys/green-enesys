import React from 'react'
import styled, { css } from 'styled-components'
import media from '../../lib/media'
import Plasma from '../../components/Plasma'
import { ContentWrapper } from '../../components/Grid'
import { H3, Label } from '../../components/Text'
import numeral from 'numeral'

import IllustrationGeneration from '../../assets/svg/IllustrationGeneration.js'
import IllustrationCapacity from '../../assets/svg/IllustrationCapacity.js'
import IllustrationReduction from '../../assets/svg/IllustrationReduction.js'

const LabelUpdate = styled(Label)`

    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.71px;
    text-transform: uppercase;

    ${media.tablet(css`
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 10px;
    `)};
`

const H3Update = styled(H3)`
    font-size: 16px;
    margin-bottom: 5px;

    ${media.tablet(css`
        font-size: 22px;
        margin-bottom: 3px;
    `)};
`

const Wrapper = styled(ContentWrapper)`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 auto;
    position: relative;
    z-index: 5;
    max-width: 300px;
    margin: 44px auto 20px;

   ${media.tablet(css`
        margin: -10px auto  60px;
        flex-direction: row;
        max-width: 1164px;
    `)};
    
    ${media.desktop(css`
        margin: 160px auto;
    `)};
`

const figures = [
    {   
        name: 'Power Generated',
        value: 3,
        unit: 'MWh',
        illustration: IllustrationGeneration
    },
    {
        name: 'Installed Capacity',
        value: 193.9,
        unit: 'MWp',
        illustration: IllustrationCapacity
    },
    {
        name: 'Co2 avoided',
        value: 15042,
        unit: 't',
        illustration: IllustrationReduction
    }
]

const FigureWrapper = styled('div')`
  display: flex;
  align-items: center;
   
  margin-bottom: 23px;
  width: 100%;


   ${media.tablet(css`
        width: 33.333%;
        margin-bottom: 0;
         flex-direction: row;
    justify-content: center;
    `)};
`

const FigureRight = styled('div')`
  display: inline-block;  
  margin-left: 26px;

   ${media.tablet(css`
        margin-left: 14px;
    `)};
    
    ${media.desktop(css`
        margin-left: 24px;
    `)};
`

const Figure = ({ data }) => {
    const { name, value, unit, illustration ,id} = data

    return (
        <FigureWrapper>
            <Plasma>
                {illustration()}
            </Plasma>
            <FigureRight>
                <H3Update strip> {value + ' ' + unit} </H3Update>
                <LabelUpdate strip> {name} </LabelUpdate>
            </FigureRight>
        </FigureWrapper>
    )
}

const electricityProducedinMWh = () => numeral((7.1906*(Math.pow(10, -6))*Date.now()-1.007584*Math.pow(10, 7))).format('0,')
const co2AvoidedinKg = () =>  numeral((0.00235760808127219*(Date.now())-(3.23839798726656 * Math.pow(10, 9)))* .001).format('0,0.00')



class PlasmaFigures extends React.PureComponent {

    state = {
        electricityProducedinMWh: electricityProducedinMWh(),
        co2AvoidedinKg: co2AvoidedinKg()
    }

    componentDidMount = () => {
        const intervalId = setInterval(this.timer, 1000)

        this.setState({
            intervalId
        })
    }
    
    componentWillUnmount = () => {
        clearInterval(this.state.intervalId)
    }
    
    timer = () => {
        this.setState({
            electricityProducedinMWh: electricityProducedinMWh(),
            co2AvoidedinKg: co2AvoidedinKg()
        })
    }
    

    render () { 
        return (
            <Wrapper my={6}>
                <Figure id='el' data={{...figures[0], value: this.state.electricityProducedinMWh}} key={figures[0].name}/>
                <Figure data={figures[1]} key={figures[1].name}/>
                <Figure id='co' data={{...figures[2], value: this.state.co2AvoidedinKg}} key={figures[2].name}/>
            </Wrapper>
        )
    }

}


export default PlasmaFigures