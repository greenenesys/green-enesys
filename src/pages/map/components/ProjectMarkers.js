import React from 'react'
import { Markers, Marker } from 'react-simple-maps'
import { Spring } from 'react-spring'
import { Link } from 'react-router-dom'
import { forceSimulation, forceX, forceCollide, forceY } from 'd3-force'

const fill = status => {
    if (status === 'Planned') return '#FED779'
    if (status === 'Development') return '#FFE7AD'
    return '#FFC539'
}

const ProjectMarkers = ({
    markers,
    isVisible,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
}) => {
    const simulation = forceSimulation(markers)
        .force('x', forceX(marker => marker.data.coordinates.longitude))
        .force('y', forceY(marker => marker.data.coordinates.latitude))
        .force('collide', forceCollide(0.35))
        .stop()
        .tick()

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
                            console.log('clicked')
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
                                radius: isVisible ? 4 : 0,
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
                                        r={4.5}
                                        fill={fill(marker.data.status)}
                                        opacity={opacity}
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
