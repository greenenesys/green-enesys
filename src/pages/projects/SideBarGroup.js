import React from 'react'
import styled from 'styled-components'
import { baseStyles } from './SideBarItem'
import { Paragraph } from '../../components/Text'

const SideBarGroupWrapper = styled('div')`
    ${baseStyles};
    height: 48px;
    background-color: white;
    border-bottom: 2px solid ${props => props.theme.color.ui.primary};
`

const SidebarGroup = ({ children }) => {
    return (
        <SideBarGroupWrapper>
            <Paragraph strip ml={3} mb={1}>
                {children}
            </Paragraph>
        </SideBarGroupWrapper>
    )
}

export default SidebarGroup
