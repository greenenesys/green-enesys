import React, { Component } from "react"
import Slider from "react-slick"
import styled, {injectGlobal} from 'styled-components'
import solar from '../../assets/images/solar.png'
import { Description } from '../../components/Text'

const Item = styled('div')`
  width: 600px;
  height: auto;
  padding: 12px;
`

const Image = styled('img')`
  width: 576px;
  border-radius: 2px;
`

const CarouselItem = ({ index, name, image, ...props}) => {
    return (
        <Item>
            <Image src={image}/>
            <Description> {name} </Description>
        </Item>
    )
}

const items = [
    {
        name: 'Solar Plant Origano',
        image: solar
    }, {
        name: 'Solar Plant Zurich',
        image: solar
    }, {
        name: 'Solar Plant Italy',
        image: solar
    }, {
        name: 'Solar Plant Munich',
        image: solar
    }, {
        name: 'Solar Plant Bremen',
        image: solar
    }, {
        name: 'Solar Plant Berlin',
        image: solar
    },

]

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }
    play() {
        this.slider.slickPlay();
    }
    pause() {
        this.slider.slickPause();
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
            autoplaySpeed: 3000
        };
        return (
            <div>
                <Slider ref={slider => (this.slider = slider)} {...settings}>
                    {items.map((item) => <CarouselItem name={item.name} image={item.image} key={item.name}/>)}
                </Slider>
            </div>
        );
    }
}