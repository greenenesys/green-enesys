import React from 'react'
import { ArticleWrapper } from '../../components/Grid/ArticleWrapper'
import { H2, H3, H4, Paragraph } from '../../components/Text'
import styled, { css } from 'styled-components'
import VideoBg from '../../assets/images/video-bg.jpg'
import media from '../../lib/media'
import VideoFile from '../../assets/video/video-bg.mp4'
import {
    IllustrationBackground,
    IllustrationBottomMountain,
    IllustrationBottom,
    Wrapper,
} from '../home/Jumbotron'
import plant from '../../assets/images/plant.png'

const IllustrationBottomUpdat = styled(IllustrationBottom)`
    left: 0;
`

const ArticleWrapperUpdate = styled(ArticleWrapper)`
    margin: 40px auto 60px;
    padding: 0 15px;
    ${media.tablet(css`
        margin: 45px auto 100px;
        padding: 0 32px;
    `)};
    ${media.desktop(css`
        margin: 128px auto 200px;
        padding: 0 32px;
    `)};
`

// font-size: 24px;
// font-weight: 400;

const ParagraphUpdate = styled(Paragraph)`
font-size: 12px;
font-weight: 400;
line-height: 26px;

${media.desktop(css`
    font-size: 14px;
`)};
${media.desktop(css`
    font-size: 1.1em;
    line-height: 1.625em;
`)};

`


const IllustrationBackgroundUpdate = styled(IllustrationBackground)`
    height: auto;
    padding-bottom: 55%;
    ${media.tablet(css`
        height: 400px;
        padding-bottom: 0;
    `)};
    ${media.desktop(css`
    height: 600px;
    `)};

`

const H2Update = styled(H2)`
    padding-bottom: 40px;
    font-size: 18px;
    font-weight: 300;
    max-width: 293px;
    z-index: 2;

    ${media.tablet(css`
        font-size: 1.4em;
        max-width: 370px;
       
    `)};
    ${media.desktop(css`
        font-size: 2.5em; 
        max-width: 600px;
        padding-bottom: 64px;
    `)};
`

const H3Update = styled(H3)`
    margin-top: 35px;   
    ${media.tablet(css`
        font-size: 24px; 
        margin-top: 64px;
    `)};
    ${media.desktop(css`
        font-size: 25px; 
    `)};
`

const H2Style2 = styled(H2)`
    font-size: 24px;
    font-weight: 400;

    ${media.tablet(css`
        font-size: 30px;
    `)};

    ${media.desktop(css`
        font-size: 2.5em;
        font-weight: 300;
    `)};
`

const AboutWrapper = styled('div')`
    ${media.tablet(css`
        margin-top: 150px;
    `)};

    ${media.desktop(css`
        margin-top: 260px;
    `)};

`

const Video = styled('video')`
    width: 100%;
    height: auto;
    margin: 0 auto;
    z-index: 1;
    display: none;
    position: relative;

    ${media.tablet(css`
        display: block;
    `)};
`

const VideoImg = styled('img')`
display: block;
width: 100%;
position: relative;
z-index: 1;

${media.tablet(css`
        display: none;

        &.iphone-img{
            display: block;
        }
    `)};
`

const VideoWrapper = styled('div')`
    padding: 0 15px;
    margin: 0 auto;
    z-index: 2;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin-top: 100px;


    ${media.tablet(css`
        padding: 0 80px;
        margin-top: -60px;
    `)};

    ${media.desktop(css`
        padding: 0 80px;
        max-width: 1080px;
        padding: 0;
    `)};
`

const ContentWrapper = styled('div')``

const Plant = styled('img')`
    width: 100%;
`
let iPhone = /iPhone/.test(navigator.userAgent) && !window.MSStream;

const VideoItem = function(){
    if(!iPhone){
        return  <Video autoPlay loop muted playSinline playsinline webkit-playsinline>
                    <source src={"http://res.cloudinary.com/dyv4p67lk/video/upload/f_auto,q_auto/v1540291061/Videos/Wooden%20Park/Sequence_02_30_SEC.mp4"} type="video/mp4" />
                </Video>
        } else {
            return <div></div>
        }
}

const VideoImgItem = function(){
    if (!iPhone) {
        return <VideoImg src={VideoBg} />
    } else {
        return <VideoImg className='iphone-img' src={VideoBg} />
    }
    
}

export default class AboutPage extends React.Component {
    componentDidMount = () => {
        window.scrollTo(0, 0)
    }

    

    render() {
        return (
            <AboutWrapper>
                <Wrapper
                    style={{ position: 'absolute', top: 0, width: '100%' }}
                >
                    <IllustrationBackgroundUpdate />
                    <IllustrationBottomUpdat />
                    {/* <IllustrationBottomMountain /> */}
                </Wrapper>
                <ContentWrapper>
                    <VideoWrapper>
                        <H2Update
                            align={'center'}
                            pb={5}
                            style={{
                                color: 'white',
                                position: 'absolute',
                                zIndex: 10,
                                fontWeight: 600,
                            }}
                        >
                            Delivering clean and afficient energy for a sustainable planet.
                        </H2Update>
                        <VideoItem/>
                        <VideoImgItem/>
                    </VideoWrapper>
                    <ArticleWrapperUpdate>
                        <H2Style2>About Green Enesys</H2Style2>
                        <ParagraphUpdate>
                            The core business of Green Enesys is to develop renewable energy generation facilities around the world. We engage in all stages of renewable energy project lifecycle, starting with project development until the facility is generating electricity. Our expertise lies in developing Solar PV projects and delivering the power plants of highest quality. We have our subsidiaries providing operations and maintenance services and asset management services to ensure high performance of the power plants over long-term. With a long standing experience in the renewable energy space, together with strong partners across the renewable energy supply chain spread all over the world, we deliver projects in the most efficient manner.
                        </ParagraphUpdate>
                        <Plant src={plant} />
                        <H3Update mt={5}>Project Development</H3Update>
                        <ParagraphUpdate>
                            In-house Project Development in selected markets. Green Enesys started out as a project developer and over the years, has developed strong cooperation with local project developers in various markets around the world. We have a strong network of project developers, EPC contractors that we collaborate with on the project development activities within the renewable energy sector.
                        </ParagraphUpdate>
                        <H3Update mt={5}>Financing</H3Update>
                        <ParagraphUpdate>
                            Financing is one of the key strengths of Green Enesys. The management team of Green Enesys has strong financial markets background, and a proven track record in financing renewable energy projects. We have expertise in arranging innovative project financing structures, both short-term and longterm, with the help of our financing partners.
                        </ParagraphUpdate>
                        <H3Update mt={5}>Construction</H3Update>

                        <ParagraphUpdate>
                        Green Enesys has a joint partnership with Ralos New Energy GmbH which is an EPC provider with a solid track record in the Solar PV sector. Depending on location, we will engage noted EPC partners in the renewable energy sector for constructing our projects. A long-standing cooperation with our preferred list of EPC providers ensures timely and efficient execution of the projects. We work with professionals at all levels of the construction phases (design, organizational work plan, testing, and hiring). Performance is at the core of the Company’s belief. Just as important, we choose suppliers that have a proven track record in delivering performance guaranteed technologies, thus ensuring that our end product can operate on all fronts of the life cycle.
                        </ParagraphUpdate>
                    </ArticleWrapperUpdate>
                </ContentWrapper>
            </AboutWrapper>
        )
    }
}
