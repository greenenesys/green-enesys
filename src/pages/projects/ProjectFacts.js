import React from 'react'
import styled, { css } from 'styled-components'
import media from '../../lib/media'
import { Paragraph, H3, H4 } from '../../components/Text'
import ProjectFactItem from './ProjectFactItem'

const ParagraphUpdate = styled(Paragraph)`
font-weight: 400;
line-height: 1.9em;
font-size: 12px;

    ${media.tablet(css`
    font-size: 14px;
  `)}
  ${media.desktop(css`
    font-size:1.1em;
    line-height: 1.625em;
  `)}
`

const toUpperCase = string => string.replace(/\b\w/g, l => l.toUpperCase())
const model = {
    location: ['area', 'country', 'location'],
    technical: ['status', 'capacity'],
}

const ProjectFactsWrapper = styled('div')`
    width: 100%;
    margin-top: 42px;
    margin-bottom: 42px;

    ${media.desktop(css`
        margin-top: 48px;
        margin-bottom: 48px;
    `)}
`

const ProjectFacts = ({ projectData }) => {
    return (
        <ProjectFactsWrapper>
            {Object.keys(model).map(key => {
                return (
                    <div key={'wrapper-' + key}>
                        <H4 strip mb={3} mt={4}>
                            {toUpperCase(key)}
                        </H4>
                        {model[key].map(key =>
                            projectData[key] ? (
                                <ProjectFactItem
                                    key={key}
                                    valueKey={toUpperCase(key)}
                                    value={projectData[key]}
                                />
                            ) : null
                        )}
                    </div>
                )
            })}

            {projectData.description && (
                <div>
                    {projectData.description.map((paragraph, i) => (
                        <ParagraphUpdate
                            key={'paragraph' + i}
                            style={{ marginTop: '40px' }}
                        >
                            {paragraph.text}
                        </ParagraphUpdate>
                    ))}
                </div>
            )}
        </ProjectFactsWrapper>
    )
}

export default ProjectFacts
