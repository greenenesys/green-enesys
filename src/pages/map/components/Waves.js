import React from 'react'
import { PatternWaves, PatternLines } from '@vx/pattern'
import styled from 'styled-components'

const Wrapper = styled('div')`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  background-color: #FFFFFF;
`
const Waves = () =>
    <Wrapper>
        <svg style={{ width: '100%', height: '100%' }}>
            <PatternWaves
                id='Waves'
                height={12}
                width={12}
                fill="transparent"
                stroke="white"
                strokeWidth={1.5}
            />
            <PatternLines
                id='Lines'
                height={4}
                width={4}
                stroke='blue'
                strokeWidth={1}
                orientation={['diagonal']}
            />
            <rect
                fill={`url(#Waves)`}
                height={'100%'}
                width={'100%'}
            />
        </svg>
    </Wrapper>

export default Waves