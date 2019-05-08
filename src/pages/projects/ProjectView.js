import React from 'react'
import styled, { css } from 'styled-components'
import media from '../../lib/media'
import PropTypes from 'prop-types'
import { H2, H3 } from '../../components/Text'
import { space } from 'styled-system'
import ProjectFacts from './ProjectFacts'
import Slider from 'react-slick'
import { getCloudImageUrl } from '../../lib/util'
import ArrowSlick from '../../assets/svg/slick-arrow.js'

const Arrow = styled('div')`
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-position: center;
    border: 1px solid rgba(0, 0, 0, 0.11);
    transition: .3s;
    border-radius: 0px;
    font-size: 0;
    display: flex !important;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    

    &:hover{
        border: 1px solid rgba(0, 0, 0, 0.91);
    }

    ${media.tablet(css`
        display: none !important;
    `)}
`
const ArrowPrev = styled(Arrow)`
    position: absolute;
    bottom: 0;
    right: 0;

    svg{
        transform: rotate(180deg);
        width: 13px;
    }
`

const ArrowNext = styled(Arrow)`
    margin: 5px 0 65px;

    svg{
        width: 13px;
    }
`

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
padding: 37px 15px 0 15px;

    ${media.tablet (css`
        padding: 30px 15px 0 25px;
        width: calc(100% - 275px);

        .slick-dots{
            display: block;
        }
    `)}

    ${media.desktop(css`
        padding: 0;
        ${space};
        width: 70%;
    `)}

    .slick-dots{
        display: none !important;
        ${media.tablet (css`
            display: block !important;
        `)}
    }
`

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ArrowNext
        className={className}
        style={{ ...style}}
        onClick={onClick}
      ><ArrowSlick/></ArrowNext>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ArrowPrev
        className={className}
        style={{ ...style }}
        onClick={onClick}
      ><ArrowSlick/></ArrowPrev>
    );
  }

let sliderSettings = {
    dots: true,
    lazyLoad: true,
    speed: 500, infinite:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    autoplaySpeed: 5000000,
    // arrows: false,
    dotsClass: 'slick-dots slick-thumb',  
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
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
                <ProjectFacts  projectData={this.props.activeProject.data} />
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
