import React from 'react'
import styled, { css } from 'styled-components'
import baseStyles from './baseStyle'

const H1 = styled('h1')`
    ${baseStyles};
    font-size: 2.5em;
`

const H2 = styled('h2')`
    ${baseStyles};
    font-size: 2.5em;
    font-weight: 300;
`

const H3 = styled('h3')`
    ${baseStyles};
    font-size: 25px;
    font-weight: 400;
`

const H4 = styled('h4')`
    ${baseStyles};
    font-size: 21px;
`

const getLineHeight = lineHeight => {
    if (lineHeight === 's') return '1.45em'
    if (lineHeight === 'xs') return '1.35em'
    return '1.625em'
}

const getFontWeight = fontWeight => {
    if (fontWeight === 'medium') return 500
    return 400
}

const Paragraph = styled('p')`
    ${baseStyles};
    line-height: ${props => getLineHeight(props.lineHeight)};
    color: ${props =>
        props.hint
            ? props.theme.color.text.hint
            : props.theme.color.text.secondary};
    font-weight: ${props => getFontWeight(props.fontWeight)};
`

const Label = styled('p')`
    ${baseStyles};
    font-size: 14px;
    display: inherit;
    color: rgba(0, 0, 0, 0.49);
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 500;
`

const Description = styled(Paragraph)`
    font-size: 15px;
    color: rgba(0, 0, 0, 0.49);
`

export { H1, H2, H3, H4, Paragraph, Label, Description }
