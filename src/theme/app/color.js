import { THEME_DARK, THEME_LIGHT } from "../constants"

export default {
    // Text Colors are used for text throughout the application, no opacity may be applied
    text: {
        primary: {
            [THEME_DARK]: '#fffdfd',
            [THEME_LIGHT]: '#1B2733',
        },

        secondary: {
            [THEME_DARK]: '#dedfe0',
            [THEME_LIGHT]: 'rgba(0,0,0,0.75)',
        },

        hint: {
            [THEME_DARK]: '#a9b0b4',
            [THEME_LIGHT]: '#697279',
        },

        white: {
            [THEME_DARK]: '#ffffff',
            [THEME_LIGHT]: '#ffffff',
        },

        accent: {
            [THEME_DARK]: '#0232BD',
            [THEME_LIGHT]: '#0232BD',
        }
    },

    ui: {
        background: {
            [THEME_DARK]: '#121213',
            [THEME_LIGHT]: '#dff2ff',
        },
        primary: {
            [THEME_DARK]: '#FFC539',
            [THEME_LIGHT]: '#FFC539',
        },
        secondary: {
            [THEME_DARK]: '#01977D',
            [THEME_LIGHT]: '#01977D',
        },
    }
}