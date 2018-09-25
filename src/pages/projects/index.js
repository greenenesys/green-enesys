import React, { Component } from 'react'
import { getProjectsAPI } from '../../api'
import { Paragraph, Description } from '../../components/Text'
import styled from 'styled-components'
import { ContentWrapper } from '../../components/Grid/ContentWrapper'
import SideBar from './SideBar'
import ProjectView from './ProjectView'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const InnerWrapper = styled('div')`
  display: flex;
  flex-direction: row;
`

class Projects extends React.Component {
    state = {
        projects: [],
        filteredProjects: [],
        status: ['completed', 'construction', 'development'],
        orderBy: 'country',
        activeProjectId: null,
    }

    componentWillMount() {
        getProjectsAPI().then(res => {
            this.setState({ projects: res.results, filteredProjects: res.results, activeProjectId: res.results[0].id })
        })
    }

    get groups () {
        const { projects, status, orderBy } = this.state
        return Array.from(new Set(projects.map(project => project.data[orderBy] !== null ? project.data[orderBy] : 'Other')))
    }

    get projectsWithActiveStatus () {
        if (this.state.projects.length < 1) return []
        return this.state.projects.filter(project => this.state.status.some(status => project.data.status.toLowerCase() === status))
    }

    get activeProject () {
        const slug = this.props.location.pathname.split('/')[2]
        return this.state.projects.find(project => project.slugs[0] === slug)
    }

    handleProjectClick = (project) => {
        this.setState({ activeProjectId: project.id })
    }

    render () {
        console.log(this.activeProject)
        return (
            <Router>
                <ContentWrapper mt={72}>
                    <InnerWrapper>
                        <SideBar
                            router={this.props.match}
                            projects={this.projectsWithActiveStatus}
                            activeProject={this.activeProject}
                            handleProjectClick={this.handleProjectClick}
                            groups={this.groups}/>
                        <Route path={`${this.props.match.url}/:slug`} render={(props) => (
                            <ProjectView
                                slug={props.match.params.slug}
                                projects={this.state.projects}
                            />
                        )}/>
                    </InnerWrapper>
                </ContentWrapper>
            </Router>
        )
    }
}

export default Projects