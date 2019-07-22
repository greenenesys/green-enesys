import React from 'react'
import styled, { css } from 'styled-components'
import media from '../../lib/media'
import { ContentWrapper } from '../Grid/ContentWrapper'
import { H2, Paragraph, Label } from '../Text'
import { StyledA } from '../Button'
import { Link } from 'react-router-dom'

const SectionWrapper = styled('div')``

const SectionWrapperOne =styled('div')`
    width 50%;
    order:1;
    ${media.tablet(css`
        width auto;
        order:1;
    `)};
`
const SectionWrapperTwo =styled('div')`
    width 50%;
    order:2;

    ${media.tablet(css`
    linn-height: 1.45;
        width auto;
        order:3;
    `)};
`
const SectionWrapperThree =styled('div')`
    width 100%;
    order:3;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 15px 0 0;
    padding: 15px 0 0;
    border-top: 1px solid #e0e0e0;
    justify-content: space-between;

    ${media.tablet(css`
        justify-content: normal;
        border-top: none;
        margin: 0;
        padding: 0;
        width auto;
        order:2;
    `)};

    &>*{
        width 50%;
        margin:0;

        ${media.tablet(css`
            width auto;

            &:first-child{
                margin-right: 32px;
            }
        `)};
    }

`

const ParagraphUpdate = styled(Paragraph)`
    font-size: 12px;
    line-height: 25px;

    ${media.tablet(css`
        font-size: 14px;
        line-height: 1.45em;
    `)};

    ${media.desktop(css`
        font-size: 1.1em;
    `)};
`

const LabelUpdate = styled(Label)`
    border-bottom: 1px solid #e0e0e0;
    padding: 0 0 10px;
    margin-bottom: 10px;

    ${media.tablet(css`
        padding: 0;
        font-size: 12px;
        margin-bottom: 23px;
        border-bottom: none;
    `)};

    ${media.desktop(css`
        font-size: 14px;
        margin-bottom: 32px;
    `)};
`

const BottomLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.color.text.primary};
    font-size: 12px;
    line-height: 25px;

    ${media.tablet(css`
        font-size: 14px;
    `)};

    ${media.desktop(css`
        font-size: 1.1em;
    `)};
`
const Wrapper = styled('div')`
    max-width:  320px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: white;
    justify-content: space-between;
    padding: 25px 0 10px;
    flex-wrap: wrap;

    ${media.tablet(css`
        max-width:  9999px;
        height: auto;
        padding: 33px 20px;
    `)};

    ${media.desktop(css`
        align-items: center;
        height: 22em;
        padding: 0;
    `)};
`

const ParagraphStyle2 = styled(Paragraph)  `
    line-height: 1;

    ${media.tablet(css`
        line-height: 1.45em;
    `)};
`



const Company = () => {
    return (
        <SectionWrapperOne>
            <LabelUpdate mb={4}> Company </LabelUpdate>
            <ParagraphUpdate lineHeight={'s'} fontWeight={'medium'} strip>
                {' '}
                Green Enesys{' '}
            </ParagraphUpdate>
            <ParagraphUpdate lineHeight={'s'} strip>
                {' '}
                Rathhausstrasse 16 <br /> 6341 Baar <br /> Switzerland{' '}
            </ParagraphUpdate>
        </SectionWrapperOne>
    )
}

const Links = () => {
    return (
        <SectionWrapperTwo>
            <LabelUpdate mb={4}> Quick links </LabelUpdate>
            <ParagraphStyle2 lineHeight={'s'} strip>
                <BottomLink to="/map">Map</BottomLink>
                <br />
                <BottomLink to="/projects">Projects</BottomLink>
                <br />
                <BottomLink to="/about">About Us</BottomLink>
                <br />
                <BottomLink to="/impressum">Impressum123</BottomLink>
                <br />
                <BottomLink to="/terms">Terms</BottomLink>
                <br />
            </ParagraphStyle2>
        </SectionWrapperTwo>
    )
}

const Phone = () => {
    return (
        <SectionWrapperThree>
            <ParagraphUpdate
                mr={4}
                lineHeight={'s'}
                hint
                strip
                style={{ display: 'inline-block' }}
            >
                {' '}
                Telefone <br /> Fax <br /> Email{' '}
            </ParagraphUpdate>
            <ParagraphUpdate
                lineHeight={'s'}
                strip
                style={{ display: 'inline-block' }}
            >
                {' '}
                +41 (41) 768 91 12 <br /> +41 (41) 781 50 22 <br />{' '}
                <StyledA href="mailto:info@greenenesys.com">
                    info@greenenesys.com
                </StyledA>
            </ParagraphUpdate>
        </SectionWrapperThree>
    )
}

const Contact = () => {
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
