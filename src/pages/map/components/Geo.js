import React from 'react'
import { Geographies, Geography } from 'react-simple-maps'

const ProjectMarkers = ({ geography, onClick }) => {
    return (
        <Geographies geography={geography}>
            {(geographies, projection) =>
                geographies.map((geography, i) => {
                    const stroke = '#d0dde7'
                    return (
                        geography.id !== '010' && (
                            <Geography
                                key={`geography-${i}`}
                                cacheId={`geography-${i}`}
                                geography={geography}
                                name={geography.properties.name}
                                projection={projection}
                                onClick={() =>
                                    onClick(geography.properties.continent)
                                }
                                style={{
                                    default: {
                                        fill: `#F0F0F0`,
                                        // stroke: stroke,
                                        strokeWidth: 0.2,
                                        outline: 'none',
                                        transition: 'all 0.25s ease-in-out',
                                    },
                                    hover: {
                                        fill: '#e6e5e8',
                                        stroke: 'none',
                                        strokeWidth: 0.2,
                                        zIndex: 10,
                                        //outline: 'none',
                                    },
                                    pressed: {
                                        fill: '#f7faf4',
                                        stroke: 'none',
                                        strokeWidth: 0.2,
                                        zIndex: 10,
                                    },
                                }}
                            />
                        )
                    )
                })
            }
        </Geographies>
    )
}

export default ProjectMarkers
