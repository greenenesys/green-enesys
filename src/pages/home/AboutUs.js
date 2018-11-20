import React from 'react'
import styled from 'styled-components'
import { ContentWrapper } from '../../components/Grid/ContentWrapper'
import { Paragraph, H3 } from '../../components/Text'
import ArrowButton from '../../components/Button/ArrowButton'
import imgProjectDevelopment from '../../assets/images/illustration_project_development.png'
import imgFinancing from '../../assets/images/illustration_financing.png'
import imgHolding from '../../assets/images/illustration_hold.png'
import imgManaging from '../../assets/images/illustration_management.png'
import { Link } from 'react-router-dom'

import { space } from 'styled-system'

const CenterArticle = styled('div')`
    margin: 0 auto;
    margin-top: 64px;
    max-width: 700px;
`

const Half = styled('div')`
    display: inline-block;
    width: calc(100% * (5 / 12) - 16px);
`

const IllustrationProjectDevelopment = styled('img')`
    height: auto;
    width: calc(100% * (6.5 / 12) - 16px);
`

const Wrapper = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${space};
`

const ProjectDevelopment = () => {
    return (
        <Wrapper mt={6}>
            <IllustrationProjectDevelopment src={imgProjectDevelopment} />
            <Half>
                <H3> Project Development </H3>
                <Paragraph>
                    In House Project Development in selected markets. Green
                    Enesys started out as a project developer and over the
                    years, has developed strong cooperation with local project
                    developers in various markets around the world. We have a
                    strong network of project developers, EPC contractors that
                    we collaborate with on the project development activities
                    within the renewable energy sector.
                </Paragraph>
            </Half>
        </Wrapper>
    )
}

const SmallWrapper = styled('div')`
    display: flex;
    align-items: center;
    ${space};
`

const IllustrationFinancing = styled('img')`
    height: auto;
    width: calc(100% * (4 / 12) - 16px);
    ${space};
`

const IllustrationHolding = styled('img')`
    height: auto;
    width: 214px;
    ${space};
`

const IllustrationManaging = styled('img')`
    height: auto;
    width: 250px;
    ${space};
`

const Financing = () => {
    return (
        <SmallWrapper mt={6}>
            <Half>
                <H3> Financing </H3>
                <Paragraph>
                    The management team of Green Enesys has strong financial
                    markets background, and a proven track record in financing
                    projects. We have expertise in arranging innovative project
                    financing structures, both short-term and long-term, with
                    the help of our financing partners.
                </Paragraph>
            </Half>
            <IllustrationFinancing src={imgFinancing} ml={6} pt={3} />
        </SmallWrapper>
    )
}

const Managing = () => {
    return (
        <SmallWrapper mt={6} style={{ justifyContent: 'flex-end' }}>
            <IllustrationManaging src={imgManaging} mr={6} pt={3} />
            <Half>
                <H3> Asset Management </H3>
                <Paragraph>
                    In house asset management arm with infrastructure in
                    international markets. Network of O&amp;M service providers
                    with a strong local presence.
                </Paragraph>
            </Half>
        </SmallWrapper>
    )
}

const Hold = () => {
    return (
        <SmallWrapper mt={104}>
            <Half>
                <H3> Exit and Hold </H3>
                <Paragraph>
                    Track Record with reported investors in the renewable energy
                    sector. Green Enesys act as the end investor for its
                    project.
                </Paragraph>
            </Half>
            <IllustrationHolding src={imgHolding} ml={6} pt={3} />
        </SmallWrapper>
    )
}

const AboutUs = () => {
    return (
        <ContentWrapper>
            <CenterArticle>
                <Paragraph>
                    {' '}
                    Green Enesys was established in 2009 and over the last 9
                    years has <strong>developed</strong>,{' '}
                    <strong>financed</strong> and <strong>delivered </strong>
                    over 270 MW of Solar PV projects in Europe, Africa and North
                    & South America. Our key focus is to develop Solar PV
                    projects around the world, we are always looking at new
                    technologies that generate electricity in a clean and
                    efficient manner.
                </Paragraph>
                <Link to={'/about'}>
                    <ArrowButton> Read More </ArrowButton>
                </Link>
            </CenterArticle>
            <ProjectDevelopment />
            <Financing />
            <Managing />
            <Hold />
        </ContentWrapper>
    )
}

export default AboutUs
