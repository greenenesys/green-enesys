import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Paragraph } from '../../components/Text'

const ProjectFactItemWrapper = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Line = styled('span')`
  border-bottom: 1px solid rgba(0,0,0,0.1);
  flex-grow: 1;
  margin-bottom: 6px;
`

const ProjectFactItem = ({ valueKey, value }) => {
    return (
        <ProjectFactItemWrapper>
            <Paragraph pr={3} strip>{valueKey}</Paragraph>
            <Line />
            <Paragraph pl={3} strip>{value}</Paragraph>
        </ProjectFactItemWrapper>
    )
}

ProjectFactItem.propTypes = {
    valueKey: PropTypes.string,
    value: PropTypes.string
}

export default ProjectFactItem