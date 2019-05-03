import React from 'react'
import styled, { css } from 'styled-components'
import media from '../../lib/media'
import { ContentWrapper } from '../../components/Grid/ContentWrapper'
import { Paragraph, H3, Label } from '../../components/Text'
import { space } from 'styled-system'
import Check from '../../assets/svg/Check'


const LabelUpdate = styled(Label)`
    ${media.tablet(css`
        margin-bottom: 19px;
        font-size: 12px;
    `)};

    ${media.desktop(css`
        margin-bottom: 12px;
        font-size: 14px;
    `)};
`

const ParagraphUpdate = styled(Paragraph)`
    font-size: 12px;
    line-height: 2.2em;

    ${media.tablet(css`
        font-size: 14px;
        line-height: 1.825em;
    `)};

    ${media.desktop(css`
        font-size: 18px;
        line-height: 1.625em;
    `)};
`

const Wrapper = styled('div')`
  width: 100%;
  background-color: #F8F9FB;
  padding: 25px 0;

 

   ${media.tablet(css`
        margin-top: 0;
        padding: 65px 0 0;
  `)};
  
    ${media.desktop(css`
         ${space};
  `)};

`

const MissionItemWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;

  ${media.tablet(css`
    padding-top: 10px;
  `)};

   ${media.desktop(css`
    ${space};
  `)};
  
`

const ItemWrapper = styled('div')`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: flex-start;
  max-width: 100%;
  margin-bottom: 20px;
  
  ${media.tablet(css`
    max-width: calc(50% - 15px);
    margin-bottom: 40px;
  `)};

  ${media.desktop(css`
     ${space};
    `)};
  
`

const InformationWrapper = styled('div')`
    padding: 2px 0 0 7px;

    ${media.tablet(css`
        padding: 8px 0 0 10px;
    `)};
    ${media.desktop(css`
        ${space};
    `)};
  
`

const missionItems = [
    {
        heading: 'Sustainability of the environment ',
        content: 'Through our business initiatives we support the sustainability of the environment.'
    }, {
        heading: 'Low-Risk and sable profits ',
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
                        <LabelUpdate strip mb={12}> {item.heading} </LabelUpdate>
                        <ParagraphUpdate strip> {item.content}</ParagraphUpdate>
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