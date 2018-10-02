import React from 'react'
import { Markers, Marker } from 'react-simple-maps'
import { Spring } from 'react-spring'
import { Link } from 'react-router-dom'

const fill = (status) => {
    if (status === 'Planned') return '#6d3aca'
    if (status === 'Development') return '#35148e'
    return '#100b25'
}

const ProjectMarkers = ({ markers, isVisible, handleMouseEnter, handleMouseLeave, handleClick }) => {
    return (
        <Markers>
            {markers.map((marker, i) => {
                console.log(marker)
                return <Marker
                    key={i}
                    preserveMarkerAspect={false}
                    data-tip="hello world"
                    onMouseDown={() => {console.log('clicked')}}
                    marker={{marker, coordinates: [marker.data.coordinates.longitude, marker.data.coordinates.latitude]}}
                    style={{
                        default: {
                            strokeWidth: 0,
                            outline: 'none',
                            fill: fill(marker.data.status),
                            transition: 'all 0.1s',
                            cursor: 'pointer',
                            width: 12
                        },
                        hover: {
                            strokeWidth: 0,
                            outline: 'none',
                            fill: fill(marker.data.status),
                            stroke: fill(marker.data.status),
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
                            <g transform={"scale(0.16)"}>
                                <path
                                    onMouseEnter={(el) => isVisible && handleMouseEnter(el, marker)}
                                    onMouseLeave={() => handleMouseLeave()}
                                    onClick={(el) => isVisible && handleClick(el, marker)}
                                    d='M12,6 C15.313,6 18,8.687 18,12 C18,15.313 15.313,18 12,18 C8.687,18 6,15.313 6,12 C6,8.687 8.687,6 12,6 Z M11,3 L11,0 L13,0 L13,3 L11,3 Z M4.2217,2.8076 L6.3437,4.9286 L4.9287,6.3436 L2.8077,4.2216 L4.2217,2.8076 Z M0,13 L0,11 L3,11 L3,13 L0,13 Z M4.9287,17.6572 L6.3437,19.0712 L4.2217,21.1922 L2.8077,19.7782 L4.9287,17.6572 Z M11,24 L11,21 L13,21 L13,24 L11,24 Z M19.0713,17.6572 L21.1923,19.7782 L19.7783,21.1922 L17.6573,19.0712 L19.0713,17.6572 Z M21,13 L21,11 L24,11 L24,13 L21,13 Z M19.7783,2.8076 L21.1923,4.2216 L19.0713,6.3436 L17.6573,4.9286 L19.7783,2.8076 Z'
                                    r={4}
                                    opacity={opacity}
                                    // stroke='#FFC539'
                                />
                            </g>
                        }
                    </Spring>
                </Marker>
            })}
        </Markers>
    )
}

export default ProjectMarkers