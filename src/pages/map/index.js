import React, { Component } from 'react'
import { ComposableMap, ZoomableGroup } from 'react-simple-maps'
import { Wrapper } from './styles'
import { Spring } from 'react-spring'
import mapData from '../../../src/assets/maps/world-110m'
import { ProjectMarkers, ProjectDensityMarkers, Geo, Waves } from './components'
import { getProjectsAPI } from '../../api'
import Tab from './components/Tab'
import Tooltip from '../../components/Tooltip'
import { Paragraph, Description } from '../../components/Text'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

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
    {
        name: 'Central America',
        coordinates: [-85.6024, 12.769],
        size: 30,
        zoom: 4,
    },
]

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
        this.setState({
            zoom: area.zoom,
            center: area.coordinates,
            area: area.name,
        })
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
            <Wrapper>
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
                        <ComposableMap
                            projectionConfig={{ scale: 205 }}
                            style={{ width: '100%', height: 'auto' }}
                        >
                            <ZoomableGroup center={[x, y]} zoom={zoom}>
                                {Geo({ geography: mapData })}
                                {ProjectDensityMarkers({
                                    markers: areas,
                                    isVisible: zoom <= 1,
                                    onClick: this.handleAreaClick,
                                })}
                                {this.state.projects &&
                                    ProjectMarkers({
                                        markers: this.state.projects,
                                        isVisible: zoom > 1,
                                        flag: this.state.flag,
                                        handleClick: this.handleProjectClick,
                                        handleMouseEnter: this
                                            .handleMarkerMouseEnter,
                                        handleMouseLeave: this
                                            .handleMarkerMouseLeave,
                                    })}
                            </ZoomableGroup>
                        </ComposableMap>
                    )}
                </Spring>
                <Tab
                    handleClick={this.handleTabClick}
                    options={areas.map(area => area.name)}
                    active={this.state.area}
                />
            </Wrapper>
        )
    }
}

export default withRouter(Map)
