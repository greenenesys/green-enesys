import React from 'react'
import { ContentWrapper } from '../../components/Grid/ContentWrapper'
import { H2, H3, H4, Paragraph } from '../../components/Text'

export default class AboutPage extends React.Component {
    componentDidMount = () => {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <ContentWrapper my={200}>
                <H2> Impressum123 </H2>
            </ContentWrapper>
        )
    }
}
