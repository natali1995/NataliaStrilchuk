import {createVuetify, ThemeDefinition} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import {defineNuxtPlugin} from "#app";

const myCustomTheme: ThemeDefinition = {
    dark: false,
    colors: {
        primary: '#000000'
    }
}

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
            }
        },
        theme: {
            defaultTheme: 'myCustomTheme',
            themes: {
                myCustomTheme
            }
        },
    })

    nuxtApp.vueApp.use(vuetify)
})
