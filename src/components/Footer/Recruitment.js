import React from 'react'
import styled from 'styled-components'
import { ContentWrapper } from '../Grid/ContentWrapper'
import { H2, Paragraph } from '../Text'
import Button, { StyledA } from '../Button'
import illustration from '../../assets/images/illustration_plant_blue.png'

const Wrapper = styled('div')`
    height: 22em;
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.color.ui.primary};
`

const ParagraphWrapper = styled('div')`
    max-width: 500px;
    opacity: 0.75;
    margin-top: 0.75em;
`

const Plant = styled('img')`
    position: absolute;
    height: 140px;
    transform: translateX(-240px) translateY(140px);
`

const Footer = () => {
    return (
        <Wrapper>
            <H2 align={'center'} strip>
                Your next job is here.
            </H2>
            <Plant src={illustration} />
            <ParagraphWrapper>
                <Paragraph strip lineHeight={'xs'} align={'center'}>
                    {' '}
                    Green Enesys is constantly looking for talanted people to
                    join our team!{' '}
                </Paragraph>
            </ParagraphWrapper>
            <StyledA href="mailto:jobs@greenenesys.com">
                <Button mt={3}>Contact Us</Button>
            </StyledA>
        </Wrapper>
    )
}

export default Footer
