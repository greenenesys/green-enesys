import React, { Component } from 'react'
import Slider from 'react-slick'
import styled, { injectGlobal } from 'styled-components'
import solar from '../../assets/images/solar.png'
import { Description } from '../../components/Text'
import { getProjectsAPI } from '../../api'
import { Link } from 'react-router-dom'
import { getCloudImageUrl } from '../../lib/util'

const Item = styled('div')`
    width: auto;
    height: auto;
    padding: 12px;
`

const Image = styled('img')`
    width: auto;
    height: 400px;
    border-radius: 2px;
`

const CustomLink = styled(Link)`
    text-decoration: none;
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

    get projectsWithMedia() {
        const { projects } = this.state
        const maxProjects = projects.length > 10 ? 10 : projects.length

        return projects
            .slice(1, maxProjects)
            .filter(project => project.data.media.length > 1)
    }

    componentWillMount() {
        getProjectsAPI().then(res => {
            this.setState({ projects: res.results })
        })
    }

    render() {
        const settings = {
            // dots: true,
            infinite: true,
            slidesToShow: 1,
            adaptiveHeight: true,
            arrows: false,
            centerMode: true,
            slidesToScroll: 1,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 2000,
        }
        // console.log(this.projectsWithMedia)
        return (
            <div>
                <Slider ref={slider => (this.slider = slider)} {...settings}>
                    {this.projectsWithMedia.map(item => {
                        const { name, media } = item.data
                        const slug = item.slugs[0]
                        console.log(item)

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
            </div>
        )
    }
}
