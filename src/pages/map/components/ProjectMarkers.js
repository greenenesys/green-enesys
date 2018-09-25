import React from 'react'
import { Markers, Marker } from 'react-simple-maps'
import { Spring } from 'react-spring'
import { Link } from 'react-router-dom'

const fill = (status) => {
    if (status === 'Planned') return '#6d3aca'
    if (status === 'Under Construction') return '#35148e'
    return '#100b25'
}

const ProjectMarkers = ({ markers, isVisible, handleMouseEnter, handleMouseLeave, handleClick }) => {
    return (
        <Markers>
            {markers.map((marker, i) => {
                return <Marker
                    key={i}
                    data-tip="hello world"
                    onMouseDown={() => {console.log('clicked')}}
                    marker={{marker, coordinates: [marker.data.coordinates.longitude, marker.data.coordinates.latitude]}}
                    style={{
                        default: {
                            strokeWidth: 0,
                            outline: 'none',
                            fill: fill(marker.data.status),
                            transition: 'all 0.1s',
                            cursor: 'pointer'
                        },
                        hover: {
                            fill: fill(marker.data.status),
                            stroke: fill(marker.data.status),
                            strokeWidth: 2,
                            transition: 'all 0.1s',
                            cursor: 'pointer'
                        },
                        pressed: {
                            fill: fill(marker.data.status),
                            stroke: '#607D8B',
                            strokeWidth: 0.3,
                            outline: 'none',
                            cursor: 'pointer'
                        },
                    }}
                >
                    <Spring to={{ opacity: isVisible ? 1 : 0, radius: isVisible ? 4 : 0 }}>
                        {({opacity, radius }) =>
                            <circle
                                onMouseEnter={(el) => handleMouseEnter(el, marker)}
                                onMouseLeave={() => handleMouseLeave()}
                                onClick={(el) => handleClick(el, marker)}
                                cx={0}
                                cy={0}
                                r={radius}
                                opacity={opacity}
                                // stroke='#FFC539'
                            />
                        }
                    </Spring>
                </Marker>
            })}
        </Markers>
    )
}

export default ProjectMarkers