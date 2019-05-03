import React from 'react'
import styled, { css } from 'styled-components'
import media from '../../../lib/media'
import DefaultTab from '../../../components/Tab'
import { space } from 'styled-system'

const Wrapper = styled('div')`
  width: 100%;
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  bottom: 0;

  ${media.tablet(css`
    display: flex;
  `)};

  ${space};
`

const Tab = ({...props}) =>
    <Wrapper mb={5}>
        <DefaultTab {...props}/>
    </Wrapper>

export default Tab