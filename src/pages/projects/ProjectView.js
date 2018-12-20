import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { H2, H3 } from '../../components/Text'
import { space } from 'styled-system'
import ProjectFacts from './ProjectFacts'
import Slider from 'react-slick'
import { getCloudImageUrl } from '../../lib/util'

const Wrapper = styled('div')`
    ${space};
    width: 70%;
`

let sliderSettings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dotsClass: 'slick-dots slick-thumb',
}

class ProjectView extends React.Component {
    static propTypes = {
        activeProject: PropTypes.object,
    }

    renderMedia = () => {
        const media = this.props.activeProject.data.media
        if (media.length < 1) return null
        if (media.length < 2) {
            if (media[0].media_item === null) return null
            return (
                <div>
                    <img
                        height="400"
                        width="100%"
                        key={media[0].media_item}
                        alt={media[0].media_description}
                        src={getCloudImageUrl(media[0].media_item)}
                    />
                </div>
            )
        }

        const mediaItems = () =>
            media.map(mediaItem => (
                <div>
                    <img
                        height="400"
                        width="100%"
                        key={mediaItem.media_item}
                        alt={mediaItem.media_description}
                        src={getCloudImageUrl(mediaItem.media_item)}
                    />
                </div>
            ))

        sliderSettings.customPaging = i => {
            return (
                <a>
                    <img
                        src={getCloudImageUrl(media[i].media_item)}
                        width={40}
                    />
                </a>
            )
        }
        return <Slider {...sliderSettings}>{mediaItems()}</Slider>
    }

    renderProject = () => {
        return (
            <div style={{ width: '100%' }}>
                <H2 strip mb={4}>
                    {this.props.activeProject.data.name}
                </H2>
                <ProjectFacts projectData={this.props.activeProject.data} />
                {this.renderMedia()}
            </div>
        )
    }

    render() {
        return (
            <Wrapper ml={4} mt={4} mb={6}>
                {this.props.activeProject ? this.renderProject() : null}
            </Wrapper>
        )
    }
}

export default ProjectView
