import { breakpoints } from '../theme/app/spacing'
import { css } from 'styled-components'

const media = Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (args) => css`
        @media (min-width: ${breakpoints[label]}em) {
            ${args}
        }
    `

    return acc
}, {})

export default media