import React from 'react'
import { H2, H3, Paragraph } from '../../components/Text'
import styled from 'styled-components'
import { ContentWrapper } from '../../components/Grid'

import imageFactory from '../../assets/images/Factory.png'
import imageWaste from '../../assets/images/Waste.png'
import imagePV from '../../assets/images/PV.png'
import imageBattery from '../../assets/images/Battery.png'
import imageHeat from '../../assets/images/Heat.png'

const Image = styled('img')`
    width: 300px;
    height: auto;
`

const ImageWrapper = styled('div')`
    padding-right: 80px;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled('div')`
    display: flex;
    margin-top: 54px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    * > p {
        vertical-align: center;
    }
`

export default () => {
    window.scrollTo(0, 0)
    return (
        <ContentWrapper mt={6} mb={6}>
            <Wrapper>
                <ImageWrapper>
                    <Image src={imageWaste} />
                </ImageWrapper>
                <div>
                    <H3 mt={0}>Waste</H3>
                    <Paragraph>
                        The World Bank expects global waste generation to double
                        by 2025. At the same time, only a fraction of today’s
                        waste is utilized and/or recycled. State-of-the-art
                        modern technologies can be utilized to effectively sort
                        the waste into forms that can then be easily recycled or
                        used to generate energy. The available technologies
                        allow for the customization of the waste sorting
                        facilities to fit the waste profile of the target
                        region.
                    </Paragraph>
                </div>
            </Wrapper>
            <Wrapper>
                <ImageWrapper>
                    <Image src={imageFactory} />
                </ImageWrapper>
                <div>
                    <H3 mt={0}>Waste to Power</H3>
                    <Paragraph>
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
                    </Paragraph>
                </div>
            </Wrapper>
            <Wrapper>
                <ImageWrapper>
                    <Image src={imagePV} />
                </ImageWrapper>
                <div>
                    <H3 mt={0}>Photovoltaic</H3>
                    <Paragraph>
                        Over one billion people live without access to
                        electricity, yet most these people live in the sunniest
                        parts of the planet. PV solar installations provide a
                        unique solution for both on and off grid applications
                        addressing the electric needs of any region. This way of
                        generating electricity not only depends the abundant and
                        renewable source of solar energy, but also Waste PV
                        Battery Thermal Storage Waste to Power reduces the
                        world’s dependency on fossil fuels, greatly reducing the
                        world’s carbon emissions.
                    </Paragraph>
                </div>
            </Wrapper>
            <Wrapper>
                <ImageWrapper>
                    <Image src={imageBattery} />
                </ImageWrapper>
                <div>
                    <H3 mt={0}>Electrical Storage</H3>
                    <Paragraph>
                        A battery can be used to store electrical power produced
                        by the renewable energy generation facilities in order
                        deliver round-the-clock electricity to the grid or
                        directly to the households (off-grid).
                    </Paragraph>
                </div>
            </Wrapper>
            <Wrapper>
                <ImageWrapper>
                    <Image src={imageHeat} />
                </ImageWrapper>
                <div>
                    <H3 mt={0}>Thermal Storage</H3>
                    <Paragraph>
                        The thermal energy storage from our energy solutions
                        matrix stores thermal energy from the waste-to-power
                        facility or from waste gases emitted by local factories.
                        The stored heat can then be used to generate power based
                        on the demand profile of the customers, providing
                        base-load power while reducing grid instability and
                        ensuring reliable energy. The thermal storage is able to
                        optimally combine various sources of energy and deliver
                        a constant and reliable energy supply.
                    </Paragraph>
                </div>
            </Wrapper>
        </ContentWrapper>
    )
}
