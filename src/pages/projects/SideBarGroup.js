import React from 'react'
import styled, { css } from 'styled-components'
import media from '../../lib/media'
import { baseStyles } from './SideBarItem'
import { Paragraph } from '../../components/Text'

const SideBarGroupWrapper = styled('div')`
    ${baseStyles};
    height: 48px;
    background-color: white;
    border-bottom: 2px solid ${props => props.theme.color.ui.primary};
`



class SidebarGroup extends React.Component {
   
     state = { show: false };
    onClick(e) {
        this.setState({ show: !this.state.show });
        let parent = document.getElementById('filter');
        let $this = e.currentTarget.parentNode;
        let ac  = 'open';
        if (hasClass($this,ac)){
            $this.classList.remove(ac);
        } else {
            $this.classList.add(ac);
            parent.classList.add('open-city');
        }

        function hasClass(target, className) {
            return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
        }
    }

    render() {
        return (
            <SideBarGroupWrapper onClick={this.onClick.bind(this)} >
                <Paragraph strip ml={3} mb={1}>
                    {this.props.children}
                </Paragraph>
            </SideBarGroupWrapper>
        )
    }
}

export default SidebarGroup
