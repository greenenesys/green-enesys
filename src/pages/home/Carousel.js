import React, { Component } from 'react'
import Slider from 'react-slick'
import styled, { injectGlobal, css  } from 'styled-components'
import media from '../../lib/media'
import solar from '../../assets/images/solar.png'
import { Description, Label } from '../../components/Text'
import { getProjectsAPI } from '../../api'
import { Link } from 'react-router-dom'
import { getCloudImageUrl } from '../../lib/util'
import ArrowSlick from '../../assets/images/slick-arrow.png'

// import ArrowButton from '../../components/Button/ArrowButton'

const Arrow = styled('div')`
    background-image: url(${ArrowSlick});
    width: 26px;
    height: 26px;
    background-repeat: no-repeat;
    background-position: center;
    border: 1px solid rgba(0, 0, 0, 0.11);
    transition: .3s;
    border-radius: 0px;
    font-size: 0;
    
    &:hover{
        border: 1px solid rgba(0, 0, 0, 0.91);
    }
`

const Wrapper = styled('div')`
  display: inline-block;
  cursor: pointer; 
  position: relative;
  box-sizing: border-box;
    font-size: 0;
  transition: ${props => props.theme.animation.create()};
  
  
  ${({ type, arrow, controlled }) => {
        if (type === 'outline') {
            return css`
        //  border: 1px solid hsl(${props => props.theme.color.interface.primary});
         padding: 0 24px;
         & :hover {
           background-color: hsla(${props => props.theme.color.interface.primary}, 0.1);
         }
    `}
        if (type !== 'outline' && !controlled) {
            return css`
          & :hover {
            & > span {
              padding-left: 12px;
            }
          }
        `
        }
    }
    }
`

const ArrowWrapper = styled('div')`
  display: inline-block;
      font-size: 0;
  transform: translateX(0px);
  transition: ${props => props.theme.animation.create()};
  
  ${({ controlled, hovered }) => {
        if (controlled && hovered) return css`
        // transform: translateX(4px);
    `
        else return css`
      ${Wrapper}:hover & {
        //  transform: translateX(4px);
      }
    `
    }} 
`

const ArrowButton = ({ onClick, disabled, type, uppercase, arrow, children, hovered, controlled }) => {
    return (
        <Wrapper onClick={onClick} type={type} controlled={controlled}>
            <Label accent uppercase={uppercase}> {children} </Label>
            {arrow && <ArrowWrapper>
                <Arrow/>
            </ArrowWrapper>}
        </Wrapper>
    )
}

ArrowButton.defaultProps = {
    onClick: () => { console.log('Clicked') },
    disabled: false,
    type: 'default',
    uppercase: false,
    arrow: true
}

const DescriptionUpdate = styled(Description)`
    margin-top:.7em;
    font-size: 16px;
    font-weight: 400;

    ${media.tablet(css`
        margin-top:1em;
    `)};
`


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
            transform: 'rotate(180deg)',
          }
        : {
          }
    return (
        <div style={style} >
            <ArrowButton  onClick={onClick} />
        </div>
    )
}


const ArrowContainer = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: -27px auto 0;
    padding: 0 19px;
    font-size: 0;
    

    ${media.tablet(css`
        margin: -30px auto 0;
    `)};
`

const CarouselItem = ({ index, name, image, ...props }) => {
    return (
        <Item>
            <Image src={image} />
            <DescriptionUpdate stlyle={{ textDecoration: 'none' }}>
                {name}
            </DescriptionUpdate>
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
