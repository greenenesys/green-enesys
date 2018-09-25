import React from 'react'
import styled from 'styled-components'
import { ContentWrapper } from '../Grid/ContentWrapper'
import Recruitment from './Recruitment'
import Contact from './Contact'
import Copyright from './Copyright'


const Wrapper = styled('footer')`
  bottom: 0;
`

const Footer = ( ) => {
    return (
        <Wrapper>
            <Recruitment key={'Footer'}/>
            <Contact />
            <Copyright />
        </Wrapper>
    )
}

export default Footer