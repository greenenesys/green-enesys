import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { H2, H3 } from '../../components/Text'
import { space } from 'styled-system'
import ProjectFacts from './ProjectFacts'
import Slider from 'react-slick'

const Wrapper = styled('div')`
  ${space};
  width: 70%;
`

const sliderSettings = {
    // dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
}

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

    renderMedia = () => {
        const media = this.activeProject.data.media
        console.log(media)
        if (media.length < 1) return null

        const mediaItems = () => media.map(mediaItem => 
            <div>
                <img height='400' width='100%' key={mediaItem.media_item} alt={mediaItem.media_description} src={mediaItem.media_item}/>
            </div>
        )
        return (
            <Slider {...sliderSettings}>
                {mediaItems()}
            </Slider>  
        )
    }
    renderProject = () => {
        
        return (
            <div style={{ width: '100%'}}>
                <H2 strip mb={4}> {this.activeProject.data.name} </H2>
                <ProjectFacts projectData={this.activeProject.data} />
                {this.renderMedia()}
            </div>
        )
    }

    render () {
        return (
            <Wrapper ml={4} mt={4} mb={6}>
                {this.props.projects && this.props.projects.length > 1 ? this.renderProject() : null}
            </Wrapper>
        )
    }
}

export default ProjectView