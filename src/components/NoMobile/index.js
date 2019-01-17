import React from 'react'
import styled from 'styled-components'
import { Description, H3 } from '../Text'

import noMobileGif from '../../assets/images/no-phone.gif'

const Wrapper = styled('div')`
    width: 100%;
    height: 80vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const TextWrapper = styled('div')`
    padding: 40px;
    > * {
        text-align: center;
    }
`

const Gif = styled('img')``

const NoMobile = () => (
    <Wrapper>
        <TextWrapper>
            <H3 strip mt={4}>
                Sadly, we do not support mobile devices yet.
            </H3>
            <Description strip mt={[2, 0, 0]}>
                Please come visit us on a desktop device.{' '}
            </Description>
        </TextWrapper>
        <Gif src={noMobileGif} />
    </Wrapper>
)

export default NoMobile
