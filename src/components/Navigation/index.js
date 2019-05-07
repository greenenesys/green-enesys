import React from 'react'
import styled, { css } from 'styled-components'
import RouterLink from '../RouterLink'
import media from '../../lib/media'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import menu from './openCloseMenu'




const Wrapper = styled('div')`
    width: 100%;
    background-color: white;
    position: fixed;
    z-index: 10000;
    box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.15);

    ${media.tablet(css`
        z-index: 10;
    `)}
`

const HeaderContent = styled('div')`
    max-width: ${props => props.theme.spacing.contentMaxWidth};
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    margin: 0 auto;
    padding-left: 24px;
    padding-right: 24px;
    min-height: 64px;

    ${media.tablet(css`
        padding: 0 45px;
    `)};

    ${media.desktop(css`
        padding: 0 32px;
        min-height: 70px;
    `)};
`

const Logo = styled('div')`
    background-image: url(${logo});
    background-size: cover;
    width: 124px;
    height: 44px;
    display: inline-block;
    margin: 8px 0;
    

    ${media.tablet(css`
        width: 140px;
        height: 50px;
        margin: 5px 0;
    `)};
    
    ${media.desktop(css`
        width: 124px;
        height: 44px;
        margin: 11px 0;
	`)};
`
const LogoLink = styled('a')`
`


const Navigation = ({ routes }) => {
    return (
        <Wrapper>
            <HeaderContent>
                <Link to={'/'}>
                    <Logo />
                </Link>
                {menu({ routes})}
            </HeaderContent>
        </Wrapper>
    )
}

export default Navigation
