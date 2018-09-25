import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './app'
import { THEME_ACTIVE } from './constants'


const withTheme = (Component, themeId = THEME_ACTIVE) => props => (
    <ThemeProvider theme={theme(themeId)}>
        <Component {...props} />
    </ThemeProvider>
)

export default withTheme