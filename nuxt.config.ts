// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css', '@/assets/styles/main.scss', '@/assets/styles/main.css'],
    build: {
        transpile: ['vuetify']
    },
    app: {
        // pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Natalia Strilchuk',
            meta: [
                {name: 'theme-color', content: '#4f55f5'},
                {name: 'description', content: 'My amazing site.'},
                {name: 'author', content: 'Natalia Strilchuk'},
                {name: 'keywords', content: 'software engineer, web-designer, portfolio'}
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/images/logo.png'},
                {rel: 'shortcut icon', type: 'image/x-icon', href: '/images/logo.png'},
            ]
        }
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/styles/_variables.scss" as *;'
                }
            }
        }
    },
    generate: {
        routes: [
            '/portfolio/:id'
        ]
    }
})
