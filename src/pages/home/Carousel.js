import React, { Component } from 'react'
import Slider from 'react-slick'
import styled, { injectGlobal, css  } from 'styled-components'
import media from '../../lib/media'
import solar from '../../assets/images/solar.png'
import { Description } from '../../components/Text'
import { getProjectsAPI } from '../../api'
import { Link } from 'react-router-dom'
import { getCloudImageUrl } from '../../lib/util'
import ArrowButton from '../../components/Button/ArrowButton'


const Item = styled('div')`
    width: auto;
    height: auto;
    padding: 15px;
`

const Image = styled('img')`
    width: 100%;
    height: auto;
    border-radius: 2px;
    margin: 0 auto;

    ${media.tablet(css`
        height: 165px;
        width: auto;
    `)};
    ${media.desktop(css`
        height: 228px;
        width: auto;
	`)};
`

const CustomLink = styled(Link)`
    text-decoration: none;
`

const SlideArrow = ({ onClick, flip }) => {
    const style = flip
        ? {
              display: 'inline-block',
          }
        : {
              transform: 'rotate(180deg) translateY(-6px)',
              display: 'inline-block',
          }
    return (
        <div style={style}>
            <ArrowButton onClick={onClick} />
        </div>
    )
}


const ArrowContainer = styled('div')`
    margin: -40px auto 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;

    ${media.tablet(css`
        margin: -30px auto 0;
    `)};
`

const CarouselItem = ({ index, name, image, ...props }) => {
    return (
        <Item>
            <Image src={image} />
            <Description stlyle={{ textDecoration: 'none' }}>
                {name}
            </Description>
        </Item>
    )
}

export default class Carousel extends Component {
    state = {
        projects: [],
    }

    play = () => {
        this.slider.slickPlay()
    }

    pause = () => {
        this.slider.slickPause()
    }

    next = () => {
        this.slider.slickNext()
    }

    prev = () => {
        this.slider.slickPrev()
    }

    get projectsWithMedia() {
        const { projects } = this.state
        const maxProjects = projects.length > 10 ? 10 : projects.length

        return projects
            .filter(project => project.data.media.length > 1)
            .slice(1, maxProjects)
    }

    componentWillMount() {
        getProjectsAPI().then(res => {
            this.setState({ projects: res.results })
        })
    }

    render() {
        const settings = {
            slidesToShow: 3,
            adaptiveHeight: true,
            arrows: false,
            centerMode: true,
            slidesToScroll: 1,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 5000000,
            responsive: [{

                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: true,
                    centerMode: false,
                    variableWidth: false,
                }
            }]
        }
        return (
            <div>
                
                <Slider ref={slider => (this.slider = slider)} {...settings}>
                    {this.projectsWithMedia.map(item => {
                        const { name, media } = item.data
                        const slug = item.slugs[0]

                        return (
                            <CustomLink
                                to={`projects/${slug}`}
                                style={{
                                    textDecoration: 'none',
                                    textUnderlinePosition: '4px',
                                }}
                            >
                                <CarouselItem
                                    name={name}
                                    image={getCloudImageUrl(
                                        media[0].media_item
                                    )}
                                    key={name}
                                />
                            </CustomLink>
                        )
                    })}
                </Slider>
                <ArrowContainer>
                    <SlideArrow onClick={this.next} />
                    <SlideArrow onClick={this.prev} flip />
                </ArrowContainer>
            </div>
        )
    }
}
