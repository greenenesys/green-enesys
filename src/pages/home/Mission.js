import React from 'react'
import styled, { css } from 'styled-components'
import { ContentWrapper } from '../../components/Grid/ContentWrapper'
import { Paragraph, H3, Label } from '../../components/Text'
import { space } from 'styled-system'
import media from '../../lib/media'
import Check from '../../assets/svg/Check'

const Wrapper = styled('div')`
  width: 100%;
  background-color: #F8F9FB;
  ${space};
`

const MissionItemWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  ${space};
`

const ItemWrapper = styled('div')`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: flex-start;
  max-width: 100%;
  
  ${media.tablet(css`
    max-width: 46%;
  `)};
  
  ${space};
`

const InformationWrapper = styled('div')`
  ${space}
`

const missionItems = [
    {
        heading: 'Sustainability of the environment ',
        content: 'Through our business initiatives we support the sustainability of the environment.'
    }, {
        heading: 'Low-Risk and sable profits',
        content: 'We deliver low-risk and stable profits for our investors and shareholders.'
    }, {
        heading: 'Footprint of renewable technologies',
        content: 'We re-invest in entrepreneurships and in developing new technologies and business models to expand the footprint of renewable technologies.'
    }, {
        heading: 'New jobs',
        content: 'We help develop the local and international community by introducing and creating new jobs concerning the projects.'
    }

]

const MissionItems = ({items}) => {
    return (
        <MissionItemWrapper pt={4}>
            {items.map((item =>
                <ItemWrapper mb={4}>
                    <Check style={{ minWidth: '54px' }}/>
                    <InformationWrapper ml={4} pt={20}>
                        <Label strip mb={12}> {item.heading} </Label>
                        <Paragraph strip> {item.content}</Paragraph>
                    </InformationWrapper>
                </ItemWrapper>
            ))}
        </MissionItemWrapper>
    )
}

const AboutUs = ( ) => {
    return (
        <Wrapper mt={6} py={6}>
            <ContentWrapper>
                <H3>Our Mission</H3>
                <MissionItems items={missionItems}/>
            </ContentWrapper>
        </Wrapper>
    )
}

export default AboutUs