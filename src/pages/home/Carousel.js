import React, { Component } from "react"
import Slider from "react-slick"
import styled, {injectGlobal} from 'styled-components'
import { ContentWrapper } from '../../components/Grid'
import solar from '../../assets/images/solar.png'
import { Description } from '../../components/Text'

injectGlobal`.slick-list,.slick-slider,.slick-track{position:relative;display:block}.slick-loading .slick-slide,.slick-loading .slick-track{visibility:hidden}.slick-slider{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list{overflow:hidden;margin:0;padding:0}.slick-list:focus{outline:0}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-slider .slick-track{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.slick-track{top:0;left:0}.slick-track:after,.slick-track:before{display:table;content:''}.slick-track:after{clear:both}.slick-slide{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none}/*# sourceMappingURL=slick.min.css.map */`

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