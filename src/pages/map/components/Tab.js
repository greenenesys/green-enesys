import React from 'react'
import styled from 'styled-components'
import DefaultTab from '../../../components/Tab'
import { space } from 'styled-system'

const Wrapper = styled('div')`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  ${space};
`

const Tab = ({...props}) =>
    <Wrapper mb={5}>
        <DefaultTab {...props}/>
    </Wrapper>

export default Tab