import React from 'react'
import styled, { css } from 'styled-components'
import { Paragraph } from '../../components/Text'
import { Link } from 'react-router-dom'

export const baseStyles = css`
    height: 48px;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const SideBarItemWrapper = styled('div')`
    ${baseStyles};
    background-color: #f8f9fb;
    cursor: pointer;
    ${Paragraph} {
        transition: ${props => props.theme.animation.create()};
    }

    ${props =>
        props.active &&
        css`
            border-left: 2px solid ${props => props.theme.color.ui.primary};
            ${Paragraph} {
                margin-left: 24px;
            }
        `}
`

const SideBarItem = ({ children, handleClick, project, router }) => {
    const active = window.location.pathname.split('/')[2] === project.slugs[0]
    return (
        <Link
            to={`${router.url}/${project.slugs[0]}`}
            style={{ textDecoration: 'none' }}
        >
            <SideBarItemWrapper active={active}>
                <Paragraph strip mb={1} ml={3}>
                    {' '}
                    {children}{' '}
                </Paragraph>
            </SideBarItemWrapper>
        </Link>
    )
}

export default SideBarItem
