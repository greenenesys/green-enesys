import React from 'react'
import { Pie } from '@vx/shape'
import { Markers, Marker } from 'react-simple-maps'
import { Spring } from 'react-spring'

const radius = 30
const browserUsage = {
    'Google Chrome': '48.09',
    'Internet Explorer': '24.14',
    Firefox: '18.82',
}

const browsers = Object.keys(browserUsage).map(k => ({ label: k, usage: browserUsage[k] }));

const fill = (i) => {
    if (i === 1) return '#6d3aca'
    if (i === 2) return '#35148e'
    return '#14092d'
}

const ProjectMarkers = ({ markers, isVisible, onClick }) => {
    return (
        <Markers>
            {markers.map((marker, i) => (
                <Marker
                    key={i}
                    marker={marker}
                    onClick={() => onClick(marker)}
                >
                    <Spring to={{ opacity: isVisible ? 1 : 0 }}>
                        {({ opacity }) =>
                            <g>
                                <text
                                    textAnchor="middle"
                                    y="4"
                                    opacity={marker.name === 'World' ? 0 : opacity}
                                    style={{
                                        fontFamily: "GT America, sans-serif",
                                        fill: "#black",
                                        fontSize: '11px',
                                        fontWeight: 500
                                    }}
                                >
                                    {Math.floor(Math.random() * 10) + 4}
                                </text>
                                <Pie
                                    data={browsers}
                                    pieValue={d => d.usage}
                                    outerRadius={marker.size}
                                    innerRadius={marker.size - 20}
                                    fill={d => fill(d.index)}
                                    opacity={opacity}
                                    cornerRadius={1}
                                    padAngle={0}
                                />
                            </g>
                        }
                    </Spring>
                </Marker>
            ))}
        </Markers>
    )
}

export default ProjectMarkers