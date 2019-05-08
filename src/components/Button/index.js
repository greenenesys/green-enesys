import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import baseStyle from '../Text/baseStyle'
import { space } from 'styled-system'
import Arrow from '../../assets/svg/Arrow'

export const StyledA = styled('a')`
    text-decoration: none;
    color: ${props => props.theme.color.text.primary};
`

const buttonHeight = '40px'
const ButtonWrapper = styled('div')`
    ${baseStyle};
    align-content: center;
    align-items: center;
    border: 0;
    cursor: pointer;
    display: inline-block;
    flex-direction: row;
    font-size: 15px;
    font-weight: 500;
    height: ${buttonHeight};
    justify-content: center;
    line-height: ${buttonHeight};
    outline: none;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: ${props => props.theme.animation.create()};
    white-space: nowrap;
    padding: 0 2rem;
    user-select: none;
    z-index: 2;
    font-weight: 600;

    color: ${props => props.theme.color.ui.secondary};
    letter-spacing: 1.5px;
    background-color: white;
    border-radius: calc(${buttonHeight} / 2);
    box-shadow: ${props => props.theme.shadow[6]};

    :hover {
        box-shadow: ${props => props.theme.shadow[5]};
    }

    :active {
        box-shadow: ${props => props.theme.shadow[1]};
        opacity: 0.9;
    }

    ${props =>
        props.secondary &&
        css`
            padding: 0;
            box-shadow: none;
            :hover {
                box-shadow: none;
            }
        `} ${space};
`

const Button = ({
    onClick,
    route = false,
    children = 'Click Me',
    ...props
}) => {
    if (route) {
        return (
            <Link to={route}>
                <ButtonWrapper {...props}>{children}</ButtonWrapper>
            </Link>
        )
    }
    return <ButtonWrapper {...props}>{children}</ButtonWrapper>
}

export const SecondaryButton = ({
    onClick,
    children = 'Click Me',
    ...props
}) => {
    return (
        <ButtonWrapper {...props} secondary>
            {children} <Arrow />
        </ButtonWrapper>
    )
}

export default Button
