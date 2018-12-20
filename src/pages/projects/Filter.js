import React from 'react'
import styled from 'styled-components'
import { baseStyles } from './SideBarItem'
import { Paragraph, Description } from '../../components/Text'
import Checkbox from '../../components/Checkbox'
import ClickAwayListener from '../../components/ClickAwayListener'

const toUpperCase = string => string.replace(/\b\w/g, l => l.toUpperCase())

const SidebarItemWrapper = styled('div')`
    ${baseStyles};
    justify-content: space-between;
    padding: 0 16px;
    height: 76px;
    overflow: hidden;
    background-color: white;
`

const FilterWrapper = styled('div')`
    padding: 24px;
    background-color: white;
    border-radius: 4px;
    box-shadow: ${props => props.theme.shadow[7]};
    position: absolute;
    transform: translate(0, -24px);
    opacity: ${({ show }) => (show ? 1 : 0)};
    pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
    transition: ${({ theme }) => theme.animation.create()};
`

const FilterItem = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 200px;
    height: 32px;
`

const IconWrapper = styled('div')`
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    pointer-events: ${props => (props.active ? 'none' : 'auto')};
`

const Left = styled('div')`
    display: flex;
    flex-direction: column;
`

const renderFilterItems = (items, activeItems, onChange) => {
    const getItemName = itemName => {
        if (itemName === 'completed') return itemName
        else if (itemName === 'construction') return 'Under Construction'
        else if (itemName === 'development') return 'Under Development'
    }
    return items.map(item => (
        <FilterItem key={item}>
            <Paragraph strip> {toUpperCase(getItemName(item))} </Paragraph>
            <Checkbox
                checked={activeItems.includes(item)}
                onChange={() => onChange(item)}
            />
        </FilterItem>
    ))
}

class Filter extends React.Component {
    state = {
        show: false,
    }

    handleClick = () => {
        this.setState({
            show: !this.state.show,
        })
    }

    onClickAway = event => {
        if (!this.state.show) return
        this.handleClick()
    }

    get statusString() {
        const { activeStatus } = this.props
        if (activeStatus.length === 0) return 'None'
        return activeStatus
            .map(status => toUpperCase(status))
            .toString()
            .replace(',', ', ')
    }

    render() {
        const { status, activeStatus, onChange, onClickAway } = this.props
        return (
            <SidebarItemWrapper>
                <Left>
                    <Description strip> Project Status </Description>
                    <Paragraph fontWeight="medium" strip mt={-1}>
                        {' '}
                        {status.length === activeStatus.length
                            ? 'All'
                            : this.statusString}{' '}
                    </Paragraph>
                </Left>

                <div>
                    <IconWrapper
                        active={this.state.show}
                        onClick={this.handleClick}
                        style={{ cursor: 'pointer' }}
                    >
                        <svg
                            width="18px"
                            height="14px"
                            viewBox="0 0 18 14"
                            version="1.1"
                        >
                            <g
                                id="Artboard"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                            >
                                <path
                                    d="M0,0 L18,0 L18,2 L0,2 L0,0 Z M4,6 L18,6 L18,8 L4,8 L4,6 Z M8,12 L18,12 L18,14 L8,14 L8,12 Z"
                                    id="Combined-Shape"
                                    fill="#FFC539"
                                    fill-rule="nonzero"
                                />
                            </g>
                        </svg>
                    </IconWrapper>
                    <ClickAwayListener onClickAway={this.onClickAway}>
                        <FilterWrapper show={this.state.show}>
                            {renderFilterItems(status, activeStatus, onChange)}
                        </FilterWrapper>
                    </ClickAwayListener>
                </div>
            </SidebarItemWrapper>
        )
    }
}

export default Filter
