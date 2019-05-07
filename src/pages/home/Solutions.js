import React from 'react'
import styled, { css } from 'styled-components'
import media from '../../lib/media'
import { ContentWrapper } from '../../components/Grid/ContentWrapper'
import { H4, H3, Paragraph } from '../../components/Text'
import ReactTooltip from 'react-tooltip'
import imgPhoto from '../../assets/images/solutions_photo.png'
import imgFactory from '../../assets/images/solutions_factory.png'
import imgFactoryMobile from '../../assets/images/Factory.png'
import imgTrash from '../../assets/images/solutions_trash.png'
import imgContainerHeat from '../../assets/images/solutions_container_heat.png'
import imgContainerBattery from '../../assets/images/solutions_container_batteries.png'
import imgBattery from '../../assets/images/Battery.png'
import imgHeat from '../../assets/images/Heat.png'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'


const H3Update = styled(H3)`
    position: static;
    font-size: 1.4em;
    padding-top: 25px;
    margin: 1em 0 2em;

    ${media.tablet(css`
        font-size: 1.1em;
        position: absolute;
        padding-top: 64px;
        margin: 1em 0;
    `)};
`


const Tooltip = styled(ReactTooltip)`
    background-color: white !important;
    opacity: 1 !important;
    box-shadow: ${props => props.theme.shadow[6]};

    &.place-top {
        &:after {
            border-top: 6px solid white !important;
        }
    }
`
const Title = styled('div')`
    display: inline-block;
    font-family: 'Fira Sans','GT America','Fira Sans','Acumin Pro',-apple-system,Roboto,sans-serif;
    font-size: 14px;
    font-weight: 400;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.11);
    min-width: 162px;
    margin-bottom: 10px;
    padding: 16px;
    color: rgba(0, 0, 0, 0.75);
    
    ${media.tablet(css`
        padding: 12px;
        position: absolute;
        font-size: 12px;
        z-index:1;
        min-width: 140px;
        text-align: center;
        background: #fff;

        &::before{
            content: '';
            position: absolute;
            width: 0px;
            height: 0px;
            top: 100%;
            left: calc(50% - 6px);
            border-right: 6px solid transparent;
            border-left: 6px solid transparent;
            border-top: 3px solid #fff;
        }
    `)};


    ${media.desktop(css`
        display: none;
    `)};
`

const TitleBattery = styled(Title)`
    ${media.tablet(css`
        left: calc(36% - 70px);
        top: 58%;
    `)};
`
const TitleTrash = styled(Title)`
    ${media.tablet(css`
        left: calc(48% - 70px);
        top: 10%;
    `)};
`
const TitleHeat = styled(Title)`
    ${media.tablet(css`
        left: calc(61% - 70px);
        top: 54%;
    `)};
`
const TitleFactory = styled(Title)`
    ${media.tablet(css`
        left: calc(71% - 68px);
        top: 33%;
    `)};
`
const TitlePhoto = styled(Title)`
    ${media.tablet(css`
        left: calc(20% - 68px);
        top: 28%;
    `)};
`





const Photo = styled('img')`
    width: 100%;
    max-width: calc(100% - 100px);
    pointer-events: none;
    margin-bottom: 35px;

    ${media.tablet(css`
        max-width: 9999px;
        pointer-events: auto;
        margin-bottom: 0;
        position: absolute;
        width: 30%;
        transform: translateX(-200%) translateY(120.4%);
    `)};
`

const Trash = styled('img')`
    width: 100%;
    max-width: calc(100% - 80px);
    pointer-events: none;
    margin-bottom: 35px;

    ${media.tablet(css`
        max-width: 9999px;
        pointer-events: auto;
        margin-bottom: 0;
        width: 25%;
        position: absolute;
        transform: translateX(-120%) translateY(120%);
    `)};
`

const Factory = styled('img')`
    display: none;
    width: 100%;
    max-width: calc(100% - 80px);
    pointer-events: none;
    margin-bottom: 35px;

    ${media.tablet(css`
        max-width: 9999px;
        pointer-events: auto;
        margin-bottom: 0;
        display: inline-block;
        width: 65%;
        transform: translateX(80%);
    `)};
`
const FactoryMobile = styled(Factory)`

    width: 100%;
    display: inline-block;

    ${media.tablet(css`
        display: none;
        width: 65%;
        transform: translateX(80%);
    `)};
`

const ContainerBattery = styled('img')`
    width: 100%;
    display: none;
    max-width: calc(100% - 105px);
    pointer-events: none;
    margin-bottom: 35px;
   
    ${media.tablet(css`
        max-width: 9999px;
        pointer-events: auto;
        margin-bottom: 0;
        display: inline-block;
        width: 60%;
        transform: translateX(14%) translateY(-26.3%);
    `)};
`

const ContainerBatteryMobile = styled(ContainerBattery)`
    display: inline-block;
   
    ${media.tablet(css`
        display: none;
    `)};
`

const ContainerHeat = styled('img')`
    width: 100%;
    display: none;
    max-width: calc(100% - 105px);
    pointer-events: none;
    margin-bottom: 35px;


    ${media.tablet(css`
        max-width: 9999px;
        pointer-events: auto;
        margin-bottom: 0;
        display: inline-block;
        width: 54%;
        position: absolute;
        transform: translateX(-39.3%) translateY(-22%);
    `)};
`

const ContainerHeatMobile = styled(ContainerHeat)`
    display: inline-block;  

    ${media.tablet(css`
        display: none;
    `)};
`

const IllustrationWrapper = styled('div')`
    text-align: center;
    max-width:400px;
    margin: 0 auto;

    ${media.tablet(css`
    max-width:9999px;
        text-align: inherit;
    `)};

    * > {
        animation: ${props => props.theme.animation.create()};
    }
`

const ArticleWrapper = styled('div')`
    margin: 0 auto;
    max-width: ${props => props.theme.spacing.articleMaxWidth};
`

const ImageWrapper = styled('div')`
`

class Solutions extends React.Component {
    state = {
        active: 'none',
    }

    handleMouseEnter = e => {
        this.setState({ active: e })
    }

    get content() {
        const id = this.state.active

        switch (id) {
            case 'factory':
                return {
                    heading: 'Waste to Power Plant',
                    // content: "We use waste to generate heat."
                }
            case 'photo':
                return {
                    heading: 'Photovoltaic Farm',
                    // content: "We use waste to generate heat."
                }
            case 'trash':
                return {
                    heading: 'Waste',
                    // content: "We use waste to generate heat."
                }
            case 'battery':
                return {
                    heading: 'Electrical Storage',
                    // content: "We use waste to generate heat."
                }
            case 'heat':
                return {
                    heading: 'Thermal Storage',
                    // content: "We use waste to generate heat."
                }
            default:
                return {
                    heading: '',
                    content: '',
                }
        }
    }

    render() {
        const { active } = this.state

        return (
            <ContentWrapper style={{ position: 'relative' }}>
                <H3Update>
                    Our Solutions
                </H3Update>
                <Tooltip>
                    <H4 fontWeight={'medium'} strip my={2}>
                        {this.content.heading}
                    </H4>
                </Tooltip>
                <IllustrationWrapper>
                    <HashLink to={'solutions#waste-to-power'} smooth>
                        <TitleFactory>Waste to Power Plant</TitleFactory>
                        <Factory
                            data-tip
                            active={active === 'factory' || active === 'none'}
                            src={imgFactory}
                            key={'factory'}
                            onMouseEnter={() =>
                                this.handleMouseEnter('factory')
                            }
                            onMouseLeave={() => this.handleMouseEnter('none')}
                        />
                        <FactoryMobile
                            data-tip
                            active={active === 'factory' || active === 'none'}
                            src={imgFactoryMobile}
                            key={'factory'}
                            onMouseEnter={() =>
                                this.handleMouseEnter('factory')
                            }
                            onMouseLeave={() => this.handleMouseEnter('none')}
                        />
                    </HashLink>
                    <HashLink to={'solutions#photovoltaic'} smooth>
                        <TitlePhoto>Photovoltaic Farm</TitlePhoto>
                        <Photo
                            data-tip
                            active={active === 'photo' || active === 'none'}
                            src={imgPhoto}
                            onMouseEnter={() => this.handleMouseEnter('photo')}
                            onMouseLeave={() => this.handleMouseEnter('none')}
                        />
                    </HashLink>
                    <HashLink to={'solutions#waste'} smooth>
                        <TitleTrash>Waste</TitleTrash>
                        <Trash
                            data-tip
                            active={active === 'trash' || active === 'none'}
                            onMouseEnter={() => this.handleMouseEnter('trash')}
                            onMouseLeave={() => this.handleMouseEnter('none')}
                            src={imgTrash}
                        />
                    </HashLink>
                    <HashLink to={'solutions#electrical-storage'} smooth>
                        <TitleBattery>Electrical Storage</TitleBattery>
                        <ContainerBattery
                            data-tip
                            active={active === 'battery' || active === 'none'}
                            onMouseEnter={() =>
                                this.handleMouseEnter('battery')
                            }
                            onMouseLeave={() => this.handleMouseEnter('none')}
                            src={imgContainerBattery}
                        />
                        <ContainerBatteryMobile
                            data-tip
                            active={active === 'battery' || active === 'none'}
                            onMouseEnter={() =>
                                this.handleMouseEnter('battery')
                            }
                            onMouseLeave={() => this.handleMouseEnter('none')}
                            src={imgBattery}
                        />
                    </HashLink>
                    <HashLink to={'solutions#thermal-storage'} smooth>
                        <TitleHeat>Thermal Storage</TitleHeat>
                        <ContainerHeat
                            data-tip
                            active={active === 'heat' || active === 'none'}
                            onMouseEnter={() => this.handleMouseEnter('heat')}
                            onMouseLeave={() => this.handleMouseEnter('none')}
                            src={imgContainerHeat}
                        />
                        <ContainerHeatMobile
                            data-tip
                            active={active === 'heat' || active === 'none'}
                            onMouseEnter={() => this.handleMouseEnter('heat')}
                            onMouseLeave={() => this.handleMouseEnter('none')}
                            src={imgHeat}
                        />
                    </HashLink>
                </IllustrationWrapper>
            </ContentWrapper>
        )
    }
}

export default Solutions
