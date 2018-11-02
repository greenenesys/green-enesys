import React from 'react'
import styled from 'styled-components'
import { ContentWrapper } from '../Grid/ContentWrapper'
import { Description } from '../Text'

const Wrapper = styled('div')`
    height: 4em;
    width: 100%;
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.15);
`

const InnerWrapper = styled(ContentWrapper)`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    height: 100%;
`

const Contact = () => {
    const showBy = window.location.pathname === '/impressum'
    return (
        <Wrapper>
            <InnerWrapper>
                <Description>
                    2018 Copyright Green Enesys. All rights reserved.
                </Description>
                {showBy && <Description>Website by Ludwig Frank</Description>}
            </InnerWrapper>
        </Wrapper>
    )
}

export default Contact
