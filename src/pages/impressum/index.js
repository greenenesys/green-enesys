import React from 'react'
import { ContentWrapper } from '../../components/Grid/ContentWrapper'
import { H2, H3, H4, Paragraph } from '../../components/Text'

export default class AboutPage extends React.Component {
    render() {
        return (
            <ContentWrapper my={200}>
                <H2> Impressum </H2>
            </ContentWrapper>
        )
    }
}
