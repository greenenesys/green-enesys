import React from 'react'
import { getProjectsAPI } from '../../api'
import styled from 'styled-components'
import { ContentWrapper } from '../../components/Grid/ContentWrapper'
import SideBar from './SideBar'
import ProjectView from './ProjectView'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const InnerWrapper = styled('div')`
    display: flex;
    flex-direction: row;
`

class Projects extends React.Component {
    constructor(props) {
        super(props)

        this.status = ['completed', 'construction', 'development']
        this.state = {
            projects: [],
            filteredProjects: [],
            status: [...this.status],
            orderBy: 'country',
            activeProjectId: null,
        }
    }

    componentWillMount() {
        getProjectsAPI().then(res => {
            this.setState({
                projects: res.results,
                filteredProjects: res.results,
                activeProjectId: res.results[0].id,
            })
        })
    }

    componentDidMount = () => {
        window.scrollTo(0, 0)
    }

    get groups() {
        const { projects, status, orderBy } = this.state
        return Array.from(
            new Set(
                projects.map(project =>
                    project.data[orderBy] !== null
                        ? project.data[orderBy]
                        : 'Other'
                )
            )
        )
    }

    get projectsWithActiveStatus() {
        if (this.state.projects.length < 1) return []
        return this.state.projects.filter(project =>
            this.state.status.some(
                status => project.data.status.toLowerCase() === status
            )
        )
    }

    get activeProject() {
        const slug = this.props.location.pathname.split('/')[2]
        return this.state.projects.find(project => project.slugs[0] === slug)
    }

    handleProjectClick = project => {
        this.setState({ activeProjectId: project.id })
    }

    handleFilterClick = filter => {
        console.log(filter)
        console.log(this.state.status)
        const { status } = this.state
        const index = status.indexOf(filter)
        console.log(index)
        const states = [...status]
        if (index === -1) this.setState({ status: [...states, filter] })
        else {
            states.splice(index, 1)
            this.setState({ status: states })
        }
    }

    render() {
        console.log(this.activeProject)
        return (
            <Router>
                <ContentWrapper mt={72}>
                    <InnerWrapper>
                        <SideBar
                            onFilterChange={this.handleFilterClick}
                            activeStatus={this.state.status}
                            status={this.status}
                            router={this.props.match}
                            projects={this.projectsWithActiveStatus}
                            activeProject={this.activeProject}
                            handleProjectClick={this.handleProjectClick}
                            groups={this.groups}
                        />
                        <Route
                            path={`${this.props.match.url}/:slug`}
                            render={props => (
                                <ProjectView
                                    slug={props.match.params.slug}
                                    projects={this.state.projects}
                                />
                            )}
                        />
                    </InnerWrapper>
                </ContentWrapper>
            </Router>
        )
    }
}

export default Projects
