import React from 'react'
import { getProjectsAPI } from '../../api'
import styled from 'styled-components'
import { ContentWrapper } from '../../components/Grid/ContentWrapper'
import SideBar from './SideBar'
import ProjectView from './ProjectView'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

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
            activeProject: null,
        }
    }

    componentWillMount() {
        getProjectsAPI().then(res => {
            this.setState({
                projects: res.results,
                filteredProjects: res.results,
                activeProject: res.results[0],
            })
        })
    }

    componentDidUpdate = (prevProps, prevState) => {}

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

    handleFilterClick = filter => {
        const { status } = this.state
        const index = status.indexOf(filter)
        const states = [...status]
        if (index === -1) this.setState({ status: [...states, filter] })
        else {
            states.splice(index, 1)
            this.setState({ status: states })
        }
    }

    render() {
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
                            handleProjectClick={() => ''}
                            groups={this.groups}
                        />

                        <Route
                            path={`${this.props.match.url}`}
                            exact={true}
                            render={props => (
                                <Redirect
                                    to={`${this.props.match.url}/badia`}
                                />
                            )}
                        />

                        <Route
                            path={`${this.props.match.url}/:slug`}
                            render={props => {
                                const activeProject = this.state.filteredProjects.find(
                                    project => {
                                        return (
                                            project.slugs[0] ===
                                            props.match.params.slug
                                        )
                                    }
                                )
                                return (
                                    <ProjectView
                                        activeProject={activeProject}
                                        history={this.props.history}
                                    />
                                )
                            }}
                        />
                    </InnerWrapper>
                </ContentWrapper>
            </Router>
        )
    }
}

export default Projects
