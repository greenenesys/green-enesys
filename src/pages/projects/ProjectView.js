import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { H2, H3 } from '../../components/Text'
import { space } from 'styled-system'
import ProjectFacts from './ProjectFacts'

const Wrapper = styled('div')`
  ${space};
  width: 70%;
`

class ProjectView extends React.Component {
    static propTypes = {
        projects: PropTypes.array,
    }

    static defaultProps = {
        projects: []
    }

    get activeProject () {
        return this.props.projects.find(project => project.slugs[0] === this.props.slug)
    }

    renderProject = () => {
        return (
            <div style={{ width: '100%'}}>
                <H2 strip> {this.activeProject.data.name} </H2>
                <ProjectFacts projectData={this.activeProject.data} />
            </div>
        )
    }

    render () {
        return (
            <Wrapper ml={4} mt={4}>
                {this.props.projects && this.props.projects.length > 1 ? this.renderProject() : null}
            </Wrapper>
        )
    }
}

export default ProjectView