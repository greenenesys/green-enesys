import React from 'react'
import styled, { css } from 'styled-components'
import media from '../../lib/media'
import { ContentWrapper } from '../../components/Grid/ContentWrapper'
import { Paragraph, H3 } from '../../components/Text'
import ArrowButton from '../../components/Button/ArrowButton'
import imgProjectDevelopment from '../../assets/images/illustration_project_development.png'
import imgFinancing from '../../assets/images/illustration_financing.png'
import imgHolding from '../../assets/images/illustration_hold.png'
import imgManaging from '../../assets/images/illustration_management.png'
import { Link } from 'react-router-dom'

import { space } from 'styled-system'

const ContentWrapperUpdate = styled(ContentWrapper)`
    ${media.tablet(css`
        padding: 0 32px 40px;
    `)};

    ${media.desktop(css`
        padding: 0 32px;
    `)};
`



const ParagraphStyle2 = styled(Paragraph)`
    font-size: 14px;
    line-height: 26px;
    ${media.tablet(css`
        font-size: 0.91em;
        line-height: 1.8;
    `)};

    ${media.desktop(css`
        font-size: 1.1em;
        line-height: 1.625;
    `)};
`

const CenterArticle = styled('div')`
    font-size: 14px;
    max-width: 565px;
    margin: 40px 0;

    ${media.tablet(css`
        font-size: 14px;
        max-width: 565px;
        margin: 65px 0;
    `)};
    
    ${media.desktop(css`
        margin: 0 auto;
        margin-top: 64px;
        max-width: 700px;
	`)};


`

const Half = styled('div')`
    display: inline-block;
    width: 100%;
    max-width: 500px;
    margin-bottom: 35px;

     ${media.tablet(css`
        width: calc(50% - 16px);
        max-width: 999px;
        margin-bottom: 0;
    `)};
    
    ${media.desktop(css`
         width: calc(100% * (5 / 12) - 16px);
	`)};
`

const IllustrationProjectDevelopment = styled('img')`
    height: auto;
    width: 207px;

     ${media.tablet(css`
        width: calc(50% - 16px);
    `)};
    
    ${media.desktop(css`
        width: calc(100% * (6.5 / 12) - 16px);
	`)};
`

const Wrapper = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    margin-bottom: 25px;

    ${media.tablet(css`
        flex-direction: row;
    `)};

    ${media.desktop(css`
        width: 100%;
        ${space};
	`)};
`

const ProjectDevelopment = () => {
    return (
        <Wrapper mt={6}>
            <IllustrationProjectDevelopment src={imgProjectDevelopment} />
            <Half>
                <H3> Project Development </H3>
                <ParagraphStyle2>
                    In House Project Development in selected markets. Green
                    Enesys started out as a project developer and over the
                    years, has developed strong cooperation with local project
                    developers in various markets around the world. We have a
                    strong network of project developers, EPC contractors that
                    we collaborate with on the project development activities
                    within the renewable energy sector.
                </ParagraphStyle2>
            </Half>
        </Wrapper>
    )
}

const SmallWrapper = styled('div')`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    margin-bottom: 18px;

    ${media.tablet(css`
        margin-top: 45px;
        flex-direction: row;
        margin-bottom: 0;
    `)};
    
    ${media.desktop(css`
        ${space};
	`)};
`
const SmallWrapper2 = styled(SmallWrapper)`
    flex-direction: column;

     ${media.tablet(css`
        flex-direction: row;
	`)};
`

const IllustrationFinancing = styled('img')`
    height: auto;
    width: 220px;
    margin-left: 30px;

    ${media.tablet(css`
        margin-left: 30px;
	`)};
    ${media.desktop(css`
        margin-left: 128px;
        width: 310px;
        ${space};
	`)};
`

const IllustrationHolding = styled('img')`
    width: 165px;

    ${media.tablet(css`
        width: 162px;
        margin: 0 auto;
        padding-top: 0;
	`)};
    ${media.desktop(css`
        height: auto;
        width: 214px;
        padding-top: 16px;
        margin-left: 128px;
        ${space};
	`)};
`

const IllustrationManaging = styled('img')`
   

    width: 200px;

    
    ${media.tablet(css`
        width: 200px;
        margin: 0 auto;
	`)};
    ${media.desktop(css`
        height: auto;
        width: 250px;
        ${space};
	`)};
   
`

const Financing = () => {
    return (
        <SmallWrapper2 mt={6}>
            <Half>
                <H3>Financing & Construction</H3>
                <ParagraphStyle2>
                    Strong finencial markets background and a proven track record in financing projects.
                    Cooperation with international technology and construction partners.
                </ParagraphStyle2>
            </Half>
            <IllustrationFinancing src={imgFinancing} ml={6} pt={3} />
        </SmallWrapper2>
    )
}

const Managing = () => {
    return (
        <SmallWrapper mt={6} style={{ justifyContent: 'flex-end' }}>
            <IllustrationManaging src={imgManaging} mr={6} pt={3} />
            <Half>
                <H3> Asset Management </H3>
                <ParagraphStyle2>
                    In house asset management arm with infrastructure in
                    international markets. Network of O&amp;M service providers
                    with a strong local presence.
                </ParagraphStyle2>
            </Half>
        </SmallWrapper>
    )
}

const Hold = () => {
    return (
        <SmallWrapper2 mt={104}>
            <Half>
                <H3> Exit and Hold </H3>
                <ParagraphStyle2>
                    Track Record with reported investors in the renewable energy
                    sector. Green Enesys act as the end investor for its
                    project.
                </ParagraphStyle2>
            </Half>
            <IllustrationHolding src={imgHolding} ml={6} pt={3} />
        </SmallWrapper2>
    )
}

const AboutUs = () => {
    return (
        <ContentWrapperUpdate>
            <CenterArticle>
                <ParagraphStyle2>
                    {' '}
                    Green Enesys was established in 2009 and over the last 9
                    years has <strong>developed</strong>,{' '}
                    <strong>financed</strong> and <strong>delivered </strong>
                    over 190 MW of Solar PV projects in Europe, Africa and North
                    & South America. Our key focus is to develop Solar PV
                    projects around the world, we are always looking at new
                    technologies that generate electricity in a clean and
                    efficient manner.
                </ParagraphStyle2>
                <Link to={'/about'}>
                    <ArrowButton> Read More </ArrowButton>
                </Link>
            </CenterArticle>
            <ProjectDevelopment />
            <Financing />
            <Managing />
            <Hold />
        </ContentWrapperUpdate>
    )
}

export default AboutUs
