import React from 'react'
import styled from 'styled-components'
import RouterLink from '../RouterLink'
import { ContentWrapper } from '../Grid/ContentWrapper'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Wrapper = styled('div')`
    height: 72px;
    width: 100%;
    background-color: white;
    position: fixed;
    z-index: 10000;
    box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.15);
`

const RouterLinkWrapper = styled('div')`
    float: right;
    display: inline-block;
`

const Logo = styled('div')`
    background-image: url(${logo});
    background-size: cover;
    width: 124px;
    height: 44px;
    display: inline-block;
    margin-top: 13px;
`

const renderRouterLinks = routes => {
    return [
        routes.map(route => {
            const active =
                `/${window.location.pathname.split('/')[1]}` === route.path
            return (
                <RouterLink
                    key={route.path}
                    path={route.path}
                    name={route.name}
                    active={active}
                />
            )
        }),
    ]
}

const Navigation = ({ routes }) => {
    return (
        <Wrapper>
            <ContentWrapper>
                <Link to={'/'}>
                    <Logo />
                </Link>
                <RouterLinkWrapper>
                    {renderRouterLinks(routes)}
                </RouterLinkWrapper>
            </ContentWrapper>
        </Wrapper>
    )
}

export default Navigation
