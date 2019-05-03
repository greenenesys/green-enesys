import React from 'react'
import { Markers, Marker } from 'react-simple-maps'
import {Spring} from 'react-spring/renderprops'
import { Link } from 'react-router-dom'
import { forceSimulation, forceX, forceCollide, forceY } from 'd3-force'

const fill = status => {
    if (status === 'Planned') return '#FED779'
    if (status === 'Development') return '#FFC539'
    return '#FFC539'
}

let oldFlag

const getValue = (factor) => {
    if (factor > 4) return 4
    if (factor > 2) return 20
    else return 14
}
const ProjectMarkers = ({
    markers,
    isVisible,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
    flag,
    zoom
}) => {
    const collideRadius = isVisible ? 0.3 : 0.9
    const simulation = forceSimulation(markers)
        .force('x', forceX(marker => marker.data.coordinates.longitude))
        .force('y', forceY(marker => marker.data.coordinates.latitude))
        .force('collide', forceCollide(collideRadius))
        .stop()

    if (flag !== oldFlag) {
        for (var i = 0; i < 120; ++i) simulation.tick()
        oldFlag = !flag
    }
    // .force('collide', forceCollide(4))
    return (
        <Markers>
            {markers.map((marker, i) => {
                return (
                    <Marker
                        key={i}
                        preserveMarkerAspect={false}
                        data-tip="hello world"
                        onMouseDown={() => {
                        }}
                        marker={{
                            marker,
                            coordinates: [
                                marker.x,
                                marker.y,
                                // marker.data.coordinates.longitude,
                                // marker.data.coordinates.latitude,
                            ],
                        }}
                        style={{
                            default: {
                                strokeWidth: 0,
                                outline: 'none',
                                fill: fill(marker.data.status),
                                transition: 'all 0.1s',
                                cursor: 'pointer',
                                width: 12,
                            },
                            hover: {
                                strokeWidth: 0,
                                outline: 'none',
                                fill: fill(marker.data.status),
                                stroke: fill(marker.data.status),
                                transition: 'all 0.1s',
                                cursor: 'pointer',
                            },
                            pressed: {
                                fill: fill(marker.data.status),
                                stroke: '#607D8B',
                                strokeWidth: 0.3,
                                outline: 'none',
                                cursor: 'pointer',
                            },
                        }}
                    >
                        <Spring
                            to={{
                                opacity: isVisible ? 1 : 0,
                                radius: getValue(zoom),
                            }}
                        >
                            {({ opacity, radius }) => (
                                <g transform={'scale(0.16)'}>
                                    <circle
                                        onMouseEnter={el =>
                                            isVisible &&
                                            handleMouseEnter(el, marker)
                                        }
                                        onMouseLeave={() => handleMouseLeave()}
                                        onClick={el =>
                                            isVisible && handleClick(el, marker)
                                        }
                                        cx={0}
                                        cy={0}
                                        r={radius}
                                        fill={fill(marker.data.status)}
                                        // opacity={opacity}
                                        // stroke='#FFC539'
                                    />
                                </g>
                            )}
                        </Spring>
                    </Marker>
                )
            })}
        </Markers>
    )
}

export default ProjectMarkers
