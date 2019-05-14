import React from 'react'
import { H2, H3, Paragraph } from '../../components/Text'
import styled, { css } from 'styled-components'
import media from '../../lib/media'
import { ContentWrapper } from '../../components/Grid'

import imageFactory from '../../assets/images/Factory.png'
import imageWaste from '../../assets/images/Waste.png'
import imagePV from '../../assets/images/PV.png'
import imageBattery from '../../assets/images/Battery.png'
import imageHeat from '../../assets/images/Heat.png'
import { space } from 'styled-system'

const H3Update = styled(H3)`
    font-size: 20px;
    
    ${media.tablet(css`
        font-size: 24px;
    `)}
    ${media.desktop(css`
        font-size: 25px;
        bargin-bottom: 25px;
    `)}
`

const ParagraphUpdate = styled(Paragraph)  `
    font-size: 12px;
    line-height: 26px;

    ${media.tablet(css`
        font-size: 14px;
    `)}
    ${media.desktop(css`
        font-size: 1.1em;
        line-height: 1.625em;
    `)}
`

const ContentWrapperUpdate = styled(ContentWrapper)`
    margin: 95px 0 85px;

    ${media.tablet(css`
        margin: 115px 0 85px;
    `)};
    ${media.desktop(css`
        ${space}
    `)};
`

const Image = styled('img')`
    width: 100%;
    height: auto;
    ${media.desktop(css`
        width: 300px;
    `)};
`

const TextWrapper = styled('div')`
    width:100%

    ${media.tablet(css`
        width:calc(100% - 250px);
    `)};
    ${media.desktop(css`
        width:auto;
    `)};
`

const ImageWrapper = styled('div')`
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 230px;
    margin: 0 auto;
    height: 230px;
    
    
    ${media.tablet(css`
    padding-top: 0;
        width: 250px;
        padding-right: 35px;
        max-width: 9999px;
         height: auto;
    `)};
    ${media.desktop(css`
        width:auto;
        padding-right: 80px;
    `)};
`

const Wrapper = styled('div')`
    display: flex;
    margin-top: -60px;
    justify-content: center;
    align-items: start;
    flex-direction: column-reverse;
    padding-top: 90px;

    ${media.tablet(css`
        flex-direction: row;
    `)};
    
    ${media.desktop(css`
        align-items: center;
        margin-top: 54px;
    `)};

    * > p {
        vertical-align: center;
    }
`

export default () => {
    window.scrollTo(0, 0)
    return (
        <ContentWrapperUpdate mt={6} mb={6}>
            <Wrapper id={'waste'}>
                <ImageWrapper>
                    <Image src={imageWaste} />
                </ImageWrapper>
                <TextWrapper>
                    <H3Update mt={0}>Waste</H3Update>
                    <ParagraphUpdate>
                        The World Bank expects global waste generation to double
                        by 2025. At the same time, only a fraction of today’s
                        waste is utilized and/or recycled. State-of-the-art
                        modern technologies can be utilized to effectively sort
                        the waste into forms that can then be easily recycled or
                        used to generate energy. The available technologies
                        allow for the customization of the waste sorting
                        facilities to fit the waste profile of the target
                        region.
                    </ParagraphUpdate>
                </TextWrapper>
            </Wrapper>
            <Wrapper id={'waste-to-power'}>
                <ImageWrapper>
                    <Image src={imageFactory} />
                </ImageWrapper>
                <TextWrapper>
                    <H3Update mt={0}>Waste to Power</H3Update>
                    <ParagraphUpdate>
                        After sorting the waste in categories (plastics,
                        biomass, metals, glass etc.) a waste-to-power facility
                        can then turn the biomass and plastic into power. The
                        metals and glass can be reused or sold to other
                        downstream businesses. Such a facility can also absorb
                        excess heat from the flue gases of the local factories
                        in order to generate additional power while
                        simultaneously reducing the green house gas emission of
                        such a factory (e.g. cement or steel production
                        factory).
                    </ParagraphUpdate>
                </TextWrapper>
            </Wrapper>
            <Wrapper id={'photovoltaic'}>
                <ImageWrapper>
                    <Image src={imagePV} />
                </ImageWrapper>
                <TextWrapper>
                    <H3Update mt={0}>Photovoltaic</H3Update>
                    <ParagraphUpdate>
                        Over one billion people live without access to
                        electricity, yet most these people live in the sunniest
                        parts of the planet. PV solar installations provide a
                        unique solution for both on and off grid applications
                        addressing the electric needs of any region. This way of
                        generating electricity not only depends the abundant and
                        renewable source of solar energy, but also Waste PV
                        Battery Thermal Storage Waste to Power reduces the
                        world’s dependency on fossil fuels, greatly reducing the
                        world’s carbon emissions. s
                    </ParagraphUpdate>
                </TextWrapper>
            </Wrapper>
            <Wrapper id={'electrical-storage'}>
                <ImageWrapper>
                    <Image src={imageBattery} />
                </ImageWrapper>
                <TextWrapper>
                    <H3Update mt={0}>Electrical Storage</H3Update>
                    <ParagraphUpdate>
                        A battery can be used to store electrical power produced
                        by the renewable energy generation facilities in order
                        deliver round-the-clock electricity to the grid or
                        directly to the households (off-grid).
                    </ParagraphUpdate>
                </TextWrapper>
            </Wrapper>
            <Wrapper id={'thermal-storage'}>
                <ImageWrapper>
                    <Image src={imageHeat} />
                </ImageWrapper>
                <TextWrapper>
                    <H3Update mt={0}>Thermal Storage</H3Update>
                    <ParagraphUpdate>
                        The thermal energy storage from our energy solutions
                        matrix stores thermal energy from the waste-to-power
                        facility or from waste gases emitted by local factories.
                        The stored heat can then be used to generate power based
                        on the demand profile of the customers, providing
                        base-load power while reducing grid instability and
                        ensuring reliable energy. The thermal storage is able to
                        optimally combine various sources of energy and deliver
                        a constant and reliable energy supply.
                    </ParagraphUpdate>
                </TextWrapper>
            </Wrapper>
        </ContentWrapperUpdate>
    )
}
