import React from 'react'
import styled, { css } from 'styled-components'
import { space } from 'styled-system'
import media from '../../lib/media'

export const ArticleWrapper = styled('div')`
    max-width: ${props => props.theme.spacing.articleMaxWidth};
    margin: 0 auto;
    padding-left: 24px;
    position: relative;
    padding-right: 24px;

    ${media.tablet(css`
        padding: 0 32px;
    `)};

    ${media.desktop(css`
        padding: 0 32px;
    `)};

    ${space};
`
