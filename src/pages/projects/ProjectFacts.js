import React from 'react'
import styled from 'styled-components'
import { Paragraph, H3, H4 } from '../../components/Text'
import ProjectFactItem from './ProjectFactItem'

const toUpperCase = (string) => string.replace(/\b\w/g, l => l.toUpperCase())
const model = {
    'location': [
        'area',
        'country',
        'location',
    ],
    'technical': [
        'status',
        'capacity',
    ]
}

const ProjectFactsWrapper = styled('div')`
  width: 100%;
  margin-top: 48px;
`

const ProjectFacts = ({ projectData }) => {
    return (
        <ProjectFactsWrapper>
            { Object.keys(model).map(key => {
                return (
                    <div key={'wrapper-' + key}>
                        <H4 strip mb={3} mt={4}>{toUpperCase(key)}</H4>
                        { model[key].map(key => projectData[key]
                            ? <ProjectFactItem key={key} valueKey={toUpperCase(key)} value={projectData[key]}/>
                            : null)
                        }
                    </div>
                )
            })}

            { projectData.description &&
                <div>
                    <H4 strip mt={5} mb={3}> About </H4>
                    { projectData.description.map((paragraph, i) => <Paragraph key={'paragraph' + i}> {paragraph.text} </Paragraph>) }
                </div>
            }
        </ProjectFactsWrapper>
    )
}

export default ProjectFacts