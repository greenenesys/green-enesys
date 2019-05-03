import React from 'react'
import styled, { css } from 'styled-components'
import media from '../../lib/media'
import { ContentWrapper } from '../Grid/ContentWrapper'
import { Description } from '../Text'
const DescriptionUpdate = styled(Description)`
    font-size: 10px;
    ${media.tablet(css`
        margin: 5px 0 20px;
        font-size: 13px;
    `)};

    ${media.desktop(css`
        font-size: 15px;
        margin: 15px 0;
    `)};
`


const Wrapper = styled('div')`
    width: 100%;
    height: auto;
    
    ${media.desktop(css`
        box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.15);
        height: 4em;
    `)};
`

const InnerWrapper = styled(ContentWrapper)`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    height: 100%;

    text-alignt: center;
`

const Contact = () => {
    const showBy = window.location.pathname === '/impressum'
    return (
        <Wrapper>
            <InnerWrapper>
                <DescriptionUpdate>
                    Copyright 2018 Green Enesys. All rigths reserved.
                </DescriptionUpdate>
                {showBy && <Description>Website by Ludwig Frank</Description>}
            </InnerWrapper>
        </Wrapper>
    )
}

export default Contact
