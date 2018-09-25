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

class Solutions extends React.Component {

    state = {
        active: 'none'
    }

    handleMouseEnter = (e) => {
        this.setState({ active: e })
    }

    get content () {
        const id = this.state.active

        switch (id) {
            case 'factory':
                return {
                    heading: 'Waste to Power Plant',
                    content: 'We use waste to generate heat.'
                }
            case 'photo':
                return {
                    heading: 'Photovoltaic',
                    content: 'We use waste to generate heat.'
                }
            case 'trash':
                return {
                    heading: 'Trash',
                    content: 'We use waste to generate heat.'
                }
            case 'battery':
                return {
                    heading: 'Battery',
                    content: 'We use waste to generate heat.'
                }
            case 'heat':
                return {
                    heading: 'Heat',
                    content: 'We use waste to generate heat.'
                }
            default: return {
                heading: '',
                content: ''
            }
        }
    }

    render () {
        const { active } = this.state

        return (
            <ContentWrapper>
                <Tooltip>
                    <Paragraph fontWeight={'medium'} strip mt={2}>{this.content.heading}</Paragraph>
                    <Paragraph strip mb={2}>{this.content.heading}</Paragraph>
                </Tooltip>
                <IllustrationWrapper>
                    <Factory
                        data-tip
                        active={ active === 'factory' || active === 'none'}
                        src={imgFactory}
                        key={'factory'}
                        onMouseEnter={() => this.handleMouseEnter('factory')}
                        onMouseLeave={() => this.handleMouseEnter('none')}
                    />
                    <Photo
                        data-tip
                        active={ active === 'photo' || active === 'none'}
                        src={imgPhoto}
                        onMouseEnter={() => this.handleMouseEnter('photo')}
                        onMouseLeave={() => this.handleMouseEnter('none')}
                    />
                    <Trash
                        data-tip
                        active={ active === 'trash' || active === 'none'}
                        onMouseEnter={() => this.handleMouseEnter('trash')}
                        onMouseLeave={() => this.handleMouseEnter('none')}
                        src={imgTrash}
                    />
                    <ContainerBattery
                        data-tip
                        active={ active === 'battery' || active === 'none'}
                        onMouseEnter={() => this.handleMouseEnter('battery')}
                        onMouseLeave={() => this.handleMouseEnter('none')}
                        src={imgContainerBattery}
                    />
                    <ContainerHeat
                        data-tip
                        active={ active === 'heat' || active === 'none'}
                        onMouseEnter={() => this.handleMouseEnter('heat')}
                        onMouseLeave={() => this.handleMouseEnter('none')}
                        src={imgContainerHeat}
                    />
                </IllustrationWrapper>
            </ContentWrapper>
        )
    }
}

export default Solutions