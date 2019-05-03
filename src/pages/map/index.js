import React, { Component } from 'react'
import { ComposableMap, ZoomableGroup } from 'react-simple-maps'
import { Wrapper } from './styles'
import { Spring } from 'react-spring/renderprops'
import mapData from '../../../src/assets/maps/continents'
import { ProjectMarkers, ProjectDensityMarkers, Geo, Waves } from './components'
import { getProjectsAPI } from '../../api'
import Tab from './components/Tab'
import Tooltip from '../../components/Tooltip'
import { Paragraph, Description } from '../../components/Text'
import styled, { css } from 'styled-components'
import media from '../../lib/media'
import { withRouter , Link } from 'react-router-dom'
import Button from '../../components/Button'

const ComposableMapUpdate = styled(ComposableMap)`
    pointer-events: none;

    ${media.tablet(css`
        pointer-events: auto;
    `)};
`


const ButtonUpdate = styled(Button)`
    color: #fff;
    background-color: #ffc539;
    padding: 0 1.3rem;
    font-size: 12px;
`

const WrapperUpdate = styled(Wrapper)`
    min-height: 10vh;

    ${media.tablet(css`
        min-height: 80vh;
    `)};
`

const TooltipWrapper = styled('div')`
    background-color: white;
    border-radius: 4px;
    max-width: 400px;
    position: relative;
    display: flex;
    user-select: none;
    padding: 12px 24px;
    white-space: nowrap;
    width: auto;
    box-shadow: ${props => props.theme.shadow[6]};
`

const areas = [
    { name: 'World', coordinates: [0, 20], size: 0, zoom: 0.75 },
    { name: 'Europe', coordinates: [11.582, 45.1351], size: 30, zoom: 5 },
    { name: 'Africa', coordinates: [8.7185, 3.5687], size: 30, zoom: 2 },
    { name: 'Central America',coordinates: [-85.6024, 12.769], size: 30, zoom: 4,},
]

const BtnWrap = styled('div')`
    position:absolute;
    bottom: 55px;

     ${media.tablet(css`
        display: none;
    `)};
`

let projection

class Map extends Component {
    
    state = {
        center: [0, 20],
        zoom: 0.75,
        area: 'World',
        projects: null,
        flag: true,
        hoveredProjectNode: document.getElementById('root'),
        hoveredProjectData: {
            data: {
                name: '',
            },
        },
    }


    handleZoomIn = () => {
        this.setState({ zoom: this.state.zoom * 2 })
    }

    handleMarkerMouseEnter = (el, data) => {
        this.setState({
            hoveredProjectNode: el.target,
            hoveredProjectData: data,
        })
    }

    handleMarkerMouseLeave = () => {
        this.setState({ hoveredProjectNode: null })
    }

    handleAreaClick = area => {
        if(area){
            this.setState({
                zoom: area.zoom,
                center: area.coordinates,
                area: area.name,
            })
        }
    }

    handleReset = () => {
        this.setState({
            center: [0, 20],
            zoom: 1,
        })
    }

    handleTabClick = tab => {
        this.handleAreaClick(areas.find(area => area.name === tab))
    }

    handleProjectClick = (element, marker) => {
        this.props.history.push(`/projects/${marker.slugs[0]}`)
    }

    handleContinentClick = continentName => {
        this.handleAreaClick(areas.find(area => area.name === continentName))
    }

    toggleMarkerSimulation = () => {
        this.setState({ flag: !this.state.flag })
    }

    componentWillMount() {
        getProjectsAPI().then(res => {
            this.setState({ projects: res.results })
        })
    }

    componentDidMount = () => {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <WrapperUpdate>
                <Tooltip position={this.state.hoveredProjectNode}>
                    <TooltipWrapper>
                        {this.state.hoveredProjectData !== null && (
                            <div>
                                <Paragraph strip fontWeight={'medium'}>
                                    {this.state.hoveredProjectData.data.name}
                                </Paragraph>
                                <Description strip mt={-1}>
                                    Click for more details
                                </Description>
                            </div>
                        )}
                    </TooltipWrapper>
                </Tooltip>
                <Waves />
                <Spring
                    from={{
                        zoom: 0.75,
                        x: 0,
                        y: 20,
                    }}
                    to={{
                        zoom: this.state.zoom,
                        x: this.state.center[0],
                        y: this.state.center[1],
                    }}
                >
                    {({ zoom, x, y }) => (
                        <ComposableMapUpdate
                            projectionConfig={{ scale: 205 }}
                            style={{ width: '100%', height: 'auto' }}
                        >
                            <ZoomableGroup center={[x, y]} zoom={zoom}>
                                {Geo({
                                    geography: mapData,
                                    onClick: (this.handleContinentClick),
                                })}
                                {ProjectDensityMarkers({
                                    markers: areas,
                                    isVisible: zoom <= 1,
                                    onClick: this.handleAreaClick,
                                })}
                                {this.state.projects &&
                                    ProjectMarkers({
                                        markers: this.state.projects,
                                        isVisible: zoom > 1,
                                        zoom: this.state.zoom,
                                        flag: this.state.flag,
                                        handleClick: this.handleProjectClick,
                                        handleMouseEnter: this
                                            .handleMarkerMouseEnter,
                                        handleMouseLeave: this
                                            .handleMarkerMouseLeave,
                                    })}
                            </ZoomableGroup>
                        </ComposableMapUpdate>
                    )}
                </Spring>
                <Tab
                    handleClick={this.handleTabClick}
                    options={areas.map(area => area.name)}
                    active={this.state.area}
                />
                <BtnWrap>
                    <Link to={'/projects'}>
                        <ButtonUpdate>
                            SEE OUR PROJECTS
                        </ButtonUpdate>
                    </Link>
                </BtnWrap>
            </WrapperUpdate>
        )
    }
}

export default withRouter(Map)
