import React from 'react'
import styled, { css } from 'styled-components'
import media from '../../lib/media'
import PropTypes from 'prop-types'
import { H2, H3 } from '../../components/Text'
import { space } from 'styled-system'
import ProjectFacts from './ProjectFacts'
import Slider from 'react-slick'
import { getCloudImageUrl } from '../../lib/util'

const ImgWrap = styled('img')`
    height:auto;
    ${media.desktop(css`
        height: 400px;
    `)}
`

const H2Update = styled(H2)`
    font-size: 23px;
    font-weight: 400;

    ${media.tablet(css`
        font-size: 30px;
    `)}
    ${media.desktop(css`
        font-weight: 300;
        font-size: 2.5em;
    `)}
`

const Wrapper = styled('div')`
width: 100%;
padding: 30px 15px 0 15px;

    ${media.tablet (css`
        padding: 30px 15px 0 25px;
        width: calc(100% - 275px);
    `)}

    ${media.desktop(css`
        padding: 0;
        ${space};
        width: 70%;
    `)}
`

let sliderSettings = {
    dots: true,
    lazyLoad: true,
    speed: 500, infinite:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    autoplaySpeed: 5000000,
    arrows: false,
    dotsClass: 'slick-dots slick-thumb',  
    adaptiveHeight: true,
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
                <div key={mediaItem}>
                    <ImgWrap
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
        let items = document.getElementsByClassName('contry');
        if (items.length){
            for(let i = 0; i<items.length;i++){
                items[i].innerHTML = this.props.activeProject.data.country;
            }
        }
        return (
            <div style={{ width: '100%' }}>
                <H2Update strip mb={4}>
                    {this.props.activeProject.data.name}
                </H2Update>
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
