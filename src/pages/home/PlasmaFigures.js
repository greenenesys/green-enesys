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
        unit: 't',
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

const PlasmaFigures = () => {
    return (
        <Wrapper my={6}>
            {figures.map(figure => <Figure data={figure} key={figure.name}/>)}
        </Wrapper>
    )
}

export default PlasmaFigures