import React from 'react'
import { Geographies, Geography } from 'react-simple-maps'

const ProjectMarkers = ({ geography }) => {
    return (
        <Geographies geography={geography}>
            {(geographies, projection) =>
                geographies.map((geography, i) => {
                    const stroke = '#d0dde7'
                    return geography.id !== '010' && (
                        <Geography
                            key={ `geography-${i}` }
                            cacheId={ `geography-${i}` }
                            geography={geography}
                            name={geography.properties.name}
                            projection={projection}
                            style={{
                                default: {
                                    fill: `#FFD673`,
                                    // stroke: stroke,
                                    strokeWidth: 0.2,
                                    outline: 'none',
                                    transition: 'all 0.25s ease-in-out',
                                },
                                hover: {
                                    fill: '#FFD673',
                                    stroke: 'none',
                                    strokeWidth: 0.2,
                                    zIndex: 10,
                                    //outline: 'none',
                                },
                                /*pressed: {
                                    fill: '#FF5722',
                                    stroke: '#607D8B',
                                    strokeWidth: 0.3,
                                    outline: 'none',
                                },*/
                            }}
                        />
                    )
                })}
        </Geographies>
    )
}

export default ProjectMarkers