import React from 'react'
import styled from 'styled-components'
import Plasma from '../../components/Plasma'
import { ContentWrapper } from '../../components/Grid'
import { H3, Label } from '../../components/Text'

import IllustrationGeneration from '../../assets/svg/IllustrationGeneration.js'
import IllustrationCapacity from '../../assets/svg/IllustrationCapacity.js'
import IllustrationReduction from '../../assets/svg/IllustrationReduction.js'

const Wrapper = styled(ContentWrapper)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const figures = [
    {
        name: 'Energy Generation',
        value: 30224,
        unit: 'mwh',
        illustration: IllustrationGeneration
    },
    {
        name: 'Installed Capacity',
        value: 34496,
        unit: 'mw',
        illustration: IllustrationCapacity
    },
    {
        name: 'Co2 reduction',
        value: 15042,
        unit: 'kg',
        illustration: IllustrationReduction
    }
]

const FigureWrapper = styled('div')`
  display: flex;
  align-items: center;
`

const FigureRight = styled('div')`
  display: inline-block;  
  margin-left: 24px;
`

const Figure = ({ data }) => {
    const { name, value, unit, illustration } = data

    return (
        <FigureWrapper>
            <Plasma>
                {illustration()}
            </Plasma>
            <FigureRight>
                <H3 strip> {value + ' ' + unit} </H3>
                <Label strip> {name} </Label>
            </FigureRight>
        </FigureWrapper>
    )
}

const electricityProducedinMWh = () => (7.19066270294266*(Math.pow(10, -6))*Date.now()-9959186.48152054).toFixed(2)
const co2AvoidedinKg = () =>  (0.00235760808127219*(Date.now())-(3.23577458463368 * 10^(9))).toFixed(2)

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
                <Figure data={{...figures[0], value: this.state.electricityProducedinMWh}} key={figures[0].name}/>
                <Figure data={figures[1]} key={figures[1].name}/>
                <Figure data={{...figures[2], value: this.state.co2AvoidedinKg}} key={figures[2].name}/>
            </Wrapper>
        )
    }

}


export default PlasmaFigures