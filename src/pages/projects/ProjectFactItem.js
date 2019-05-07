import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import media from '../../lib/media'
import { Paragraph } from '../../components/Text'

const ProjectFactItemWrapper = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 25px 10px 0;

    ${media.tablet(css`
      padding: 0;
    `)}

`

const ParagraphUpdate = styled(Paragraph)`
  font-size: 14px;
  font-weight: 400;

  ${media.desktop(css`
    font-size:1.1em;
  `)}
`

const Line = styled('span')`
  border-bottom: 1px solid rgba(0,0,0,0.1);
  flex-grow: 1;
  margin-bottom: 6px;
`

const ProjectFactItem = ({ valueKey, value }) => {
    return (
        <ProjectFactItemWrapper>
        <ParagraphUpdate pr={3} strip>{valueKey}</ParagraphUpdate>
            <Line />
        <ParagraphUpdate pl={3} strip>{value}</ParagraphUpdate>
        </ProjectFactItemWrapper>
    )
}

ProjectFactItem.propTypes = {
    valueKey: PropTypes.string,
    value: PropTypes.string
}

export default ProjectFactItem