export default {
    head: {
        title: "My Nuxt.js Application!"
    },
    publicRuntimeConfig: {
        copyright: process.env.NUXT_ENV_COPYRIGHT || 'Mirel Rock Solid'
    },
    privateRuntimeConfig: {
        apiSecret: process.env.API_SECRET
    }
};