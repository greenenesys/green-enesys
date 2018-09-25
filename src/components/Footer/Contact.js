import React from 'react'
import styled from 'styled-components'
import { ContentWrapper } from '../Grid/ContentWrapper'
import { H2, Paragraph, Label } from '../Text'

const Wrapper = styled('div')`
  height: 22em;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  > * {
    margin-top: -10px;
  }
`

const ParagraphWrapper = styled('div')`
  max-width: 300px;
  opacity: 0.75;
  margin-top: 0.75em;
`

const SectionWrapper = styled('div')`
  
`

const Company = () => {
    return (
        <SectionWrapper>
            <Label mb={4}> Company </Label>
            <Paragraph lineHeight={'s'} fontWeight={'medium'} strip> Green Enesys </Paragraph>
            <Paragraph lineHeight={'s'} strip> Rathhausstrasse 16 <br/> 6341 Baar <br/> Switzerland </Paragraph>
        </SectionWrapper>
    )
}


const Links = () => {
    return (
        <SectionWrapper>
            <Label mb={4}> Quick links </Label>
            <Paragraph lineHeight={'s'} strip> Home <br/> About Us <br/> Projects <br/> Team </Paragraph>
        </SectionWrapper>
    )
}


const Phone = () => {
    return (
        <SectionWrapper>
            <Paragraph mr={4} mt={35} lineHeight={'s'} hint strip style={{ display: 'inline-block'}}> Telephone <br/> Fax <br/> Email </Paragraph>
            <Paragraph lineHeight={'s'} strip style={{ display: 'inline-block'}}> +41 (41) 768 91 12 <br/> +41 (41) 781 50 22 <br/> info@greenenesys.com </Paragraph>
        </SectionWrapper>
    )
}

const Contact = ( ) => {
    return (
        <ContentWrapper style={{ zIndex: -1 }}>
            <Wrapper>
                <Company />
                <Phone />
                <Links />
            </Wrapper>
        </ContentWrapper>
    )
}

export default Contact