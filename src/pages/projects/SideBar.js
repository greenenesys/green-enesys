import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SideBarItem from './SideBarItem'
import SideBarGroup from './SideBarGroup'

const Wrapper = styled('div')`
  width: 30%;
  border-left: 1px solid rgba(0,0,0,0.1);
  border-right: 1px solid rgba(0,0,0,0.1);
  min-height: 800px;
`

class SideBar extends React.Component {
    static propTypes = {
        projects: PropTypes.array,
        groups: PropTypes.array,
        activeProject: PropTypes.object,
        handleProjectClick: PropTypes.func,
        router: PropTypes.object
    }

    static defaultProps = {
        projects: [],
        groups: [],
        activeProjectId: ''
    }

    state = {
        projects: this.props.projects
    }

    renderItems = () => {
        const { groups, projects } = this.props

        return groups.map(group => {
            return (
                <div key={'wrapper-' + group}>
                    <SideBarGroup> {group} </SideBarGroup>
                    <div>
                        {projects.filter(project => project.data.country === group).map(project => {
                            return (
                                <SideBarItem
                                    router={this.props.router}
                                    project={project}
                                    handleClick={this.props.handleProjectClick}
                                    key={'item-' + project.id}>
                                    {project.data.name}
                                </SideBarItem>
                            )
                        })}
                    </div>
                </div>
            )
        })
    }

    render () {
        return (
            <Wrapper>
                {this.renderItems()}
            </Wrapper>
        )
    }
}

export default SideBar