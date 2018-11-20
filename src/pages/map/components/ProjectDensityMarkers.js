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

const browsers = Object.keys(browserUsage).map(k => ({
    label: k,
    usage: browserUsage[k],
}))

const fill = i => {
    if (i === 1) return '#FED779'
    if (i === 2) return '#FFE7AD'
    return '#FFC539'
}

const ProjectMarkers = ({ markers, isVisible, onClick }) => {
    return null
}

export default ProjectMarkers
