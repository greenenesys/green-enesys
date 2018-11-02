import React from 'react'
import styled, { css } from 'styled-components'
import { ContentWrapper } from '../../components/Grid/ContentWrapper'
import { H4, Paragraph } from '../../components/Text'
import { space } from 'styled-system'
import media from '../../lib/media'
import ReactTooltip from 'react-tooltip'
import imgPhoto from '../../assets/images/solutions_photo.png'
import imgFactory from '../../assets/images/solutions_factory.png'
import imgTrash from '../../assets/images/solutions_trash.png'
import imgContainerHeat from '../../assets/images/solutions_container_heat.png'
import imgContainerBattery from '../../assets/images/solutions_container_batteries.png'
import svgSolutionsFactory from '../../assets/svg/SolutionsFactory'

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

const Photo = styled('img')`
    position: absolute;
    width: 30%;
    transform: translateX(-200%) translateY(120.4%);
`

const Trash = styled('img')`
    width: 25%;
    position: absolute;
    transform: translateX(-120%) translateY(120%);
`

const Factory = styled('img')`
    width: 65%;
    transform: translateX(80%);
`

const ContainerBattery = styled('img')`
    width: 60%;
    transform: translateX(14%) translateY(-26.3%);
`

const ContainerHeat = styled('img')`
    width: 54%;
    position: absolute;
    transform: translateX(-39.3%) translateY(-22%);
`

const IllustrationWrapper = styled('div')`
    * > {
        animation: ${props => props.theme.animation.create()};
    }
`

const ArticleWrapper = styled('div')`
    margin: 0 auto;
    max-width: ${props => props.theme.spacing.articleMaxWidth};
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
                    heading: 'Photovoltaic',
                    // content: "We use waste to generate heat."
                }
            case 'trash':
                return {
                    heading: 'Trash',
                    // content: "We use waste to generate heat."
                }
            case 'battery':
                return {
                    heading: 'Battery',
                    // content: "We use waste to generate heat."
                }
            case 'heat':
                return {
                    heading: 'Heat',
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
                <Tooltip>
                    <H4 fontWeight={'medium'} strip my={2}>
                        {this.content.heading}
                    </H4>
                </Tooltip>
                <IllustrationWrapper>
                    <Factory
                        data-tip
                        active={active === 'factory' || active === 'none'}
                        src={imgFactory}
                        key={'factory'}
                        onMouseEnter={() => this.handleMouseEnter('factory')}
                        onMouseLeave={() => this.handleMouseEnter('none')}
                    />
                    <Photo
                        data-tip
                        active={active === 'photo' || active === 'none'}
                        src={imgPhoto}
                        onMouseEnter={() => this.handleMouseEnter('photo')}
                        onMouseLeave={() => this.handleMouseEnter('none')}
                    />
                    <Trash
                        data-tip
                        active={active === 'trash' || active === 'none'}
                        onMouseEnter={() => this.handleMouseEnter('trash')}
                        onMouseLeave={() => this.handleMouseEnter('none')}
                        src={imgTrash}
                    />
                    <ContainerBattery
                        data-tip
                        active={active === 'battery' || active === 'none'}
                        onMouseEnter={() => this.handleMouseEnter('battery')}
                        onMouseLeave={() => this.handleMouseEnter('none')}
                        src={imgContainerBattery}
                    />
                    <ContainerHeat
                        data-tip
                        active={active === 'heat' || active === 'none'}
                        onMouseEnter={() => this.handleMouseEnter('heat')}
                        onMouseLeave={() => this.handleMouseEnter('none')}
                        src={imgContainerHeat}
                    />
                </IllustrationWrapper>
                <ArticleWrapper>
                    <H4 strip pt={4}>
                        Waste
                    </H4>
                    <Paragraph>
                        The World Bank expects global waste generation to double
                        by 2025. At the same time, only a fraction of today’s
                        waste is utilized and/or recycled. State-of-the-art
                        modern technologies can be utilized to effectively sort
                        the waste into forms that can then be easily recycled or
                        used to generate energy. The available technologies
                        allow for the customization of the waste sorting
                        facilities to fit the waste profile of the target
                        region.
                    </Paragraph>
                    <H4 strip pt={4}>
                        Waste to Power
                    </H4>
                    <Paragraph>
                        After sorting the waste in categories (plastics,
                        biomass, metals, glass etc.) a waste-to-power facility
                        can then turn the biomass and plastic into power. The
                        metals and glass can be reused or sold to other
                        downstream businesses. Such a facility can also absorb
                        excess heat from the flue gases of the local factories
                        in order to generate additional power while
                        simultaneously reducing the green house gas emission of
                        such a factory (e.g. cement or steel production
                        factory).
                    </Paragraph>
                    <H4 strip pt={4}>
                        Photovoltaic
                    </H4>
                    <Paragraph>
                        Over one billion people live without access to
                        electricity, yet most these people live in the sunniest
                        parts of the planet. PV solar installations provide a
                        unique solution for both on and off grid applications
                        addressing the electric needs of any region. This way of
                        generating electricity not only depends the abundant and
                        renewable source of solar energy, but also Waste PV
                        Battery Thermal Storage Waste to Power reduces the
                        world’s dependency on fossil fuels, greatly reducing the
                        world’s carbon emissions.
                    </Paragraph>
                    <H4 strip pt={4}>
                        Thermal Storage
                    </H4>
                    <Paragraph>
                        The thermal energy storage from our energy solutions
                        matrix stores thermal energy from the waste-to-power
                        facility or from waste gases emitted by local factories.
                        The stored heat can then be used to generate power based
                        on the demand profile of the customers, providing
                        base-load power while reducing grid instability and
                        ensuring reliable energy. The thermal storage is able to
                        optimally combine various sources of energy and deliver
                        a constant and reliable energy supply.
                    </Paragraph>
                    <H4 strip pt={4}>
                        Battery
                    </H4>
                    <Paragraph>
                        A battery can be used to store electrical power produced
                        by the renewable energy generation facilities in order
                        deliver round-the-clock electricity to the grid or
                        directly to the households (off-grid).
                    </Paragraph>
                </ArticleWrapper>
            </ContentWrapper>
        )
    }
}

export default Solutions
