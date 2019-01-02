import React from 'react'
import { ArticleWrapper } from '../../components/Grid/ArticleWrapper'
import { H2, H3, H4, Paragraph } from '../../components/Text'
import styled from 'styled-components'
import {
    IllustrationBackground,
    IllustrationBottomMountain,
    IllustrationBottom,
    Wrapper,
} from '../home/Jumbotron'
import plant from '../../assets/images/plant.png'

const Video = styled('video')`
    width: 100%;
    height: auto;
    margin: 0 auto;
    z-index: 200;
`

const VideoWrapper = styled('div')`
    max-width: 1080px;
    margin: 0 auto;
    z-index: 200;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -60px;
`

const ContentWrapper = styled('div')`
    transform: translateY(-400px);
`

const Plant = styled('img')``

export default class AboutPage extends React.Component {
    componentDidMount = () => {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div style={{ marginTop: '64px' }}>
                <Wrapper>
                    <IllustrationBackground />
                    <IllustrationBottom />
                    <IllustrationBottomMountain />
                </Wrapper>
                <ContentWrapper>
                    <VideoWrapper>
                        <H2
                            align={'center'}
                            pb={5}
                            style={{
                                color: 'white',
                                position: 'absolute',
                                zIndex: 10,
                                maxWidth: '600px',
                                fontWeight: 600,
                            }}
                        >
                            Delivering clean and efficient energy for a
                            sustainable planet.
                        </H2>
                        <Video autoPlay loop style={{ zIndex: 4 }}>
                            <source src="https://res.cloudinary.com/dyv4p67lk/video/upload/f_auto,q_auto/v1540291061/Videos/Wooden%20Park/Sequence_02_30_SEC.mp4" />
                        </Video>
                    </VideoWrapper>
                    <ArticleWrapper mt={6} mb={200}>
                        <H2>About Green Enesys </H2>
                        <Paragraph>
                            The core business of Green Enesys is to develop
                            renewable energy generation facilities around the
                            world. We engage in all stages of renewable energy
                            project lifecycle. starting with project development
                            until the facility is generating electricity. Our
                            expertise lies in developing Solar PV projects and
                            delivering the power plants of highest quality. We
                            have our subsidiaries providing operations and
                            maintenance services and asset management services
                            to ensure high performance of the power plants over
                            long-term. With a long-standing experience in the
                            renewable energy space, together with strong
                            partners across the renewable energy supply chain
                            spread all over the world, we deliver projects in
                            the most efficient manner.
                        </Paragraph>
                        <Paragraph>
                            Green Enesys has a joint partnership with Ralos New
                            Energy GmbH which is an EPC provider with a solid
                            track record in the Solar PV sector. Depending on
                            location, we will engage noted EPC partners in the
                            renewable energy sector for constructing our
                            projects. A long-standing cooperation with our
                            preferred list of EPC providers ensures timely and
                            efficient execution of the projects. We choose
                            suppliers that have a proven track record in
                            delivering performance guaranteed technologies, thus
                            ensuring that our end product can operate on all
                            fronts of the life cycle.
                        </Paragraph>
                        <Paragraph>
                            Green Enesys uses experienced O&M service providers
                            with a strong local presence for the operation and
                            maintenance of its power generating facilities. Our
                            stringent selection criteria allow us to select
                            contractors with solid track record in the operation
                            and maintenance of renewable energy power plants.
                        </Paragraph>
                        <Paragraph>
                            We have an in-house asset management arm offering
                            asset management services to our investors. Over the
                            years we have built local infrastructure in
                            international markets to carry out the asset
                            management activities in an efficient manner.
                        </Paragraph>
                        <Plant src={plant} />
                        <H3 mt={5}>Project Development</H3>
                        <Paragraph>
                            In House Project Development in selected markets.
                            Green Enesys started out as a project developer and
                            over the years, has developed strong cooperation
                            with local project developers in various markets
                            around the world. We have a strong network of
                            project developers, EPC contractors that we
                            collaborate with on the project development
                            activities within the renewable energy sector.
                        </Paragraph>
                        <H3 mt={5}>Financing</H3>
                        <Paragraph>
                            The management team of Green Enesys has strong
                            financial markets background, and a proven track
                            record in financing projects. We have expertise in
                            arranging innovative project financing structures,
                            both short-term and long-term, with the help of our
                            financing partners.
                        </Paragraph>
                        <H3 mt={5}>Asset Management</H3>
                        <Paragraph>
                            In house asset management arm with infrastructure in
                            international markets. Network of O&M service
                            providers with a strong local presence.
                        </Paragraph>
                        <H3 mt={5}>Exit & Hold</H3>
                        <Paragraph>
                            Track Record with reported investors in the
                            renewable energy sector. Green Enesys act as the end
                            investor for its project.
                        </Paragraph>
                    </ArticleWrapper>
                </ContentWrapper>
            </div>
        )
    }
}
