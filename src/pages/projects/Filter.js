import React from 'react'
import styled, { css } from 'styled-components'
import media from '../../lib/media'
import { baseStyles } from './SideBarItem'
import { Paragraph, Description } from '../../components/Text'
import Checkbox from '../../components/Checkbox'
import ClickAwayListener from '../../components/ClickAwayListener'
import img from '../../assets/images/arrow.png'
import icon from '../../assets/images/icon-country.png'

const ParagraphStyle2 = styled(Paragraph)`
    font-size: .7em;

    ${media.tablet(css`
        font-size: 1.1em;
    `)}
`


const toUpperCase = string => string.replace(/\b\w/g, l => l.toUpperCase())

const СountryWrapper = styled('div')`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    ${media.tablet(css`
        display: none;
    `)}
`

const HeadWrapper = styled('div')`
background-color: white;
position: relative;
height: 53px;
padding:0 0 0 16px;
width: 50%;
position: relative;
display: flex;
justify-content: center;

    ${media.tablet(css`
        justify-content: space-between;
        ${baseStyles};
        height: auto;
        padding: 3px 0 0 16px;
    `)}
    ${media.desktop(css`
        padding: 0 16px;
        height: 76px;
    `)}`

const DescriptionUpdate = styled(Paragraph)`
    font-size: 13px;
    margin: 0 0 4px;

    ${media.desktop(css`
        font-size: 15px;
        margin: 0;
    `)}
`

const ParagraphUpdate = styled(Paragraph)`
    display: none;
    ${media.tablet(css`
        display: block;
        font-size:1.1em;
    `)}
    ${media.desktop(css`
        font-size:1.1em;
    `)}
`

const SidebarItemWrapper = styled('div')`
    display: flex;
`

const FilterWrapper = styled('div')`
    padding: 24px 15px 24px 10px;
    background-color: white;
    border-radius: 4px;
    top:100%;
    left: 0;
    right:0;
    z-index:2;
    width: 100%;
    box-shadow: ${props => props.theme.shadow[7]};
    position: absolute;
    opacity: ${({ show }) => (show ? 1 : 0)};
    pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
    transition: ${({ theme }) => theme.animation.create()};

    ${media.tablet(css`
        padding: 24px;
    `)}
    `
    
    const FilterItem = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 120px;
    height: 32px;
    
    ${media.tablet(css`
        min-width: 200px;
    `)}
    span[style]{
        z-index: 0;
    }
`

const IconWrapper = styled('div')`
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    pointer-events: ${props => (props.active ? 'none' : 'auto')};
    background: url(${img}) ;
    background-repeat: no-repeat;
    background-position: center;
    transform: ${props => (props.active ? 'rotate(0deg)' : 'rotate(180deg)')}

`

const Left = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
`


const renderFilterItems = (items, activeItems, onChange) => {
    const getItemName = itemName => {
        if (itemName === 'completed') return itemName
        else if (itemName === 'construction') return 'Under Construction'
        else if (itemName === 'development') return 'Under Development'
    }
    return items.map(item => (
        <FilterItem key={item}>
            <ParagraphStyle2 strip> {toUpperCase(getItemName(item))} </ParagraphStyle2>
            <Checkbox
                checked={activeItems.includes(item)}
                onChange={() => onChange(item)}
            />
        </FilterItem>
    ))
}
const TextCountry = styled('div')`
    font-family: 'Fira Sans','GT America','Fira Sans','Acumin Pro',-apple-system,Roboto,sans-serif;
    font-weight: 400;
`
const Icon = styled('img')`
    padding: 0 10px;
    font-size: 14px;
    font-weight: 400;
`

class Filter extends React.Component {
    state = {
        show: false,
        show2: false,
        openMenu: false
    }

    handleClick = () => {
        this.setState({
            show: !this.state.show,
        })
    }

    clickFolterHendler = (e) => {
        let target = e.currentTarget.parentNode.parentNode;
        this.state.openMenu= !this.state.openMenu;
        let ac = 'mobile-open';
        if (hasClass(target,ac)){
            target.classList.remove(ac)
        } else {
            var item = document.querySelectorAll('.item-group.open');
            if(item.length){
                for (var i = 0; i < item.length; i++) {
                    item[i].classList.remove('open')
                }
            }
            target.classList.add(ac)
        }
       
        function hasClass(target, className) {
            return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
        }

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
        const { status, activeStatus, onChange, onClickAway, activeProject} = this.props
        return (
            <SidebarItemWrapper>
                <СountryWrapper onClick={this.clickFolterHendler.bind(this)}>
                    <TextCountry className={'contry'}></TextCountry>
                    <Icon src={icon}></Icon>
                </СountryWrapper>
                <HeadWrapper >
                    <Left>
                        <DescriptionUpdate strip> Project Status </DescriptionUpdate>
                        <ParagraphUpdate  fontWeight="medium" strip mt={-1}>
                            {' '}
                            {status.length === activeStatus.length
                                ? 'All'
                                : this.statusString}{' '}
                        </ParagraphUpdate>
                    </Left>

                    <div>
                        <IconWrapper
                            active={this.state.show}
                            onClick={this.handleClick}
                            style={{ cursor: 'pointer' }}
                        >
                        </IconWrapper>
                        <ClickAwayListener onClickAway={this.onClickAway}>
                            <FilterWrapper show={this.state.show}>
                                {renderFilterItems(status, activeStatus, onChange)}
                            </FilterWrapper>
                        </ClickAwayListener>
                    </div>
                </HeadWrapper>
            </SidebarItemWrapper>
        )
    }
}

export default Filter
