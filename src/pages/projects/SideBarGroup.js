import React from 'react'
import styled, { css } from 'styled-components'
import media from '../../lib/media'
import { baseStyles } from './SideBarItem'
import { Paragraph } from '../../components/Text'

const SideBarGroupWrapper = styled('div')`
    ${baseStyles};
    justify-content: space-between;
    position: relative;
    height: 48px;
    background-color: white;
    border-bottom: 2px solid ${props => props.theme.color.ui.primary};
`

const OpenClose = styled('div')`
    position: relative;
    height: 12px;
    width: 12px;
    margin-right: 12px;
    display: none;

    ${media.tablet(css`
        display: block;
	`)};
`

const OpenCloseLine = styled('span')`
    position: absolute;
    height: 2px;
    width: 100%;
    left:0;
    top: calc(50% - 1px);
    background: #979797;
    transition: .2s
`

const OpenCloseLineTwo = styled(OpenCloseLine)`
    transform: rotate(90deg);

    .open &{
        transform: rotate(0); 
    }
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
                <OpenClose>
                    <OpenCloseLine/>
                    <OpenCloseLineTwo />
                </OpenClose>
            </SideBarGroupWrapper>
        )
    }
}

export default SidebarGroup
