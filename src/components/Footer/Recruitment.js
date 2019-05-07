import React from 'react'
import styled, { css } from 'styled-components'
import media from '../../lib/media'
import { ContentWrapper } from '../Grid/ContentWrapper'
import { H2, Paragraph } from '../Text'
import Button, { StyledA } from '../Button'
import illustration from '../../assets/images/illustration_plant_blue.png'

const H2Update = styled(H2)`
    font-size: 26px;
    max-width: 128px;
    line-height: 1.4;
    margin-bottom: 15px;

    ${media.tablet(css`
        line-height: 1.15;
        font-size: 30px;
        max-width: 170px;
        margin-bottom: 25px;
    `)};

    ${media.desktop(css`
        font-size: 2.5em;
        max-width: 9999px;
        margin-bottom: 0;
    `)};    
`
const ButtonUpdate = styled(Button)`
    margin-top: 38px;
    ${media.desktop(css`
        margin-top: 16px;
    `)};  
`

const Wrapper = styled('div')`
    position: relative;
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.color.ui.primary};
    padding: 40px 0;

    ${media.tablet(css`
        padding: 65px 0;
    `)};

    ${media.desktop(css`
        height: 22em;
        margin: 0;
    `)};  
`
const ParagraphUpdate = styled(Paragraph)`
    font-size: 15px;
    max-width: 270px;
    ${media.tablet(css`
        font-size: 16px;
        max-width: 270px;
    `)};

    ${media.desktop(css`
        font-size: 1.1em;
        max-width: 9999px;
    `)};  
`

const ParagraphWrapper = styled('div')`
    max-width: 500px;
    opacity: 0.75;
    margin-top: 0.75em;
`

const Plant = styled('img')`
    position: absolute;
    height: 140px;
    left: 50%;
    bottom: 0;
    transform: translateX(calc(-50% - 120px)) translateY(35px);
    

     ${media.tablet(css`
            transform: translateX(-224px) translateY(28px);
            height: 165px;
    `)};
`

const Footer = () => {
    return (
        <Wrapper>
            <H2Update align={'center'} strip>
                Your next job is here.
            </H2Update>
            <Plant src={illustration} />
            <ParagraphWrapper>
                <ParagraphUpdate strip lineHeight={'xs'} align={'center'}>
                    {' '}
                    Green Enesys is constantly looking for talanted people to
                    join our team!{' '}
                </ParagraphUpdate>
            </ParagraphWrapper>
            <StyledA href="mailto:info@greenenesys.com">
                <ButtonUpdate mt={3}>Contact Us</ButtonUpdate>
            </StyledA>
        </Wrapper>
    )
}

export default Footer
