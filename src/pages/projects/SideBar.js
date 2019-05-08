import React from 'react'
import styled, { css } from 'styled-components'
import media from '../../lib/media'
import PropTypes from 'prop-types'
import SideBarItem from './SideBarItem'
import SideBarGroup from './SideBarGroup'
import Filter from './Filter'
import CloseIcon from '../../assets/images/close.png'
import ArrowBack from '../../assets/images/arrow-back.png'
import { Link } from 'react-router-dom'

const СountryWrapper = styled('div')   `
    ${media.tablet(css`
        display: none;
    `)}
`

const GroupContent = styled('div')`
    position: relative;
`

    

const Wrapper = styled('div')`
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    min-width: 275px;
    
    ${media.tablet(css`
        overflow: scroll;
        height: calc(100vh - 72px);
    `)}
    ${media.desktop(css`
        min-width: 30%;
    `)}
`

const FilterWrapper = styled(Wrapper)``

const ItemWrapper = styled('div')`
    height:0;
    overflow: hidden;
     position: absolute;
     top:0 ;
     left:0;
     width: 100%;
     background: #fff;

    ${media.tablet(css`
        position: static;
    `)}

    .open>&{
        height:auto;
        min-height: calc(100vh - 60px);
        ${media.tablet(css`
            height:auto;
            min-height: 0;
        `)}
    }
`

const Back = styled('div')`
    display: none;
    align-items: center;
    justify-content: space-between;
    width: 70px;

    .open-city &{
        display: flex;
    }

    
`

const ItemGroup = styled('div')`
    display: block;
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    left:0;
    visibility: hidden;
    opacity: 0;
    height: 100vh;
    overflow: scroll;
    z-index: 10000;
    background: #fff;

    .mobile-open &{
        opacity: 1;
        visibility: visible;
    }
    
    ${media.tablet(css`
        overflow: auto;
        height:auto;
        position: static;
        opacity: 1;
        visibility: visible;
    `)}
`

const HeadGroup = styled('div')`
    height: 60px;
    padding: 0 15px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    font-family: 'Fira Sans','GT America','Fira Sans','Acumin Pro',-apple-system,Roboto,sans-serif;
    font-size: 22px;
    font-weight: 700;

    ${media.tablet(css`
       display: none;
    `)}
`
const BtnWrapper = styled('div')`
    max-width: 285px;
    height: 50px;
    display: block;
    text-align: center;
    padding: 0 15px;
    margin: 24px auto;
    background-color: #f7b500;

    ${media.tablet(css`
       display: none;
    `)}



    a{
        font-family: 'MaisonNeue';
        color: #ffffff;
        font-size: 18px;
        font-weight: 600;
          display: inline-block;
        width: 100%;
        text-decoration: none;
        line-height: 53px;
    }
`
const HeadTitle = styled('div')`
     .open-city &{
        display: none;
    }
`
const Close = styled('img')``

class SideBar extends React.Component {
    static propTypes = {
        activeProject: PropTypes.object,
    }
    static propTypes = {
        projects: PropTypes.array,
        groups: PropTypes.array,
        activeProject: PropTypes.object,
        handleProjectClick: PropTypes.func,
        router: PropTypes.object,
    }

    static defaultProps = {
        projects: [],
        groups: [],
        activeProjectId: '',
    }

    state = {
        projects: this.props.projects,
    }

    closeMobileMenu = (e) => {
        let target = document.getElementById('filter');
        target.classList.remove('mobile-open');
    }
    backHandler = (e) => {
        let target = document.getElementById('filter');
        if (target) {
            target.classList.remove('open-city');
            let opener = document.getElementById('filter').getElementsByClassName('item-group');
                for (let i = 0; i < opener.length; i++) {
                    opener[i].classList.remove('open');
                }
            opener=false;
        }
        
    }

 

    

    renderItems = () => {
        const { groups, projects, activeProject } = this.props
        return groups.map((group, index) => {
            let rout = '';
            return (
                
                <div key={'wrapper-' + group} className={index ? 'item-group' : 'item-group open'}>
                
                    <SideBarGroup> {group} </SideBarGroup>
                    <ItemWrapper>
                        {projects
                            .filter(project => project.data.country === group)
                            .map((project,index) => {
                                if (!index) rout = project.slugs[0];
                                return (
                                    
                                    <SideBarItem
                                        router={this.props.router}
                                        project={project}
                                        handleClick={
                                            this.props.handleProjectClick
                                        }
                                        key={'item-' + project.id}
                                    >
                                        {project.data.name}
                                    </SideBarItem>
                                )
                            })}
                        <BtnWrapper onClick={this.closeMobileMenu.bind(this)}>
                            <Link to={'/projects/' + rout}>
                                View Project
                            </Link>
                        </BtnWrapper>
                    </ItemWrapper>
                </div>
            )
        })
    }

    render() {

        return (
            <FilterWrapper id={'filter'}>
                <Filter
                    onChange={this.props.onFilterChange}
                    status={this.props.status}
                    activeStatus={this.props.activeStatus}
                    activeProject={this.props.activeProject}
            />
                <ItemGroup>
                    <HeadGroup>
                        <HeadTitle>Filter</HeadTitle>
                        <Back onClick={this.backHandler.bind(this)}><Close src={ArrowBack}></Close>City</Back>
                        <Close src={CloseIcon} onClick={this.closeMobileMenu.bind(this)}></Close>
                    </HeadGroup>
                    <GroupContent>
                        {this.renderItems()}
                    </GroupContent>
                </ItemGroup>
            </FilterWrapper>
        )
        
        
    }
}

export default SideBar
