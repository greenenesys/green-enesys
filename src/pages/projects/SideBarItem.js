import React from 'react'
import styled, { css } from 'styled-components'
import { Paragraph } from '../../components/Text'
import { Link } from 'react-router-dom'
import media from '../../lib/media'

export const baseStyles = css`
width: 100%;
display: flex;
align-items: center;
border-bottom: 1px solid rgba(0, 0, 0, 0.1);
height: 44px;
    ${media.desktop(css`
        height: 48px;
    `)}
`
const ParagraphUpdate = styled(Paragraph)`
 font-size: 14px;
    ${media.desktop(css`
        font-size: 1.1em;
    `)}
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

class SideBarItem extends React.Component {
    closeMobileMenu = (e) => {
        let target = document.getElementById('filter');
        target.classList.remove('mobile-open');
    }

    render() {
        return (
            <Link
                to={`${this.props.router.url}/${this.props.project.slugs[0]}`}
                style={{ textDecoration: 'none' }}
                onClick={this.closeMobileMenu.bind(this)}
            >
                <SideBarItemWrapper>
                    <ParagraphUpdate strip mb={1} ml={3}>
                        {' '}
                        {this.props.children}{' '}
                    </ParagraphUpdate>
                </SideBarItemWrapper>
            </Link>
        )
    }
}

export default SideBarItem
