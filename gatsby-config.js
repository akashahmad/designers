module.exports = {
    siteMetadata: {
        title: `Gatsby Typescript Tailwind`,
        description: `An example config of Gatsby + TypeScript + Tailwind CSS`,
        author: `@gatsbyjs`,
        siteUrl: `https://www.geekshub.io`,

    },
    plugins: [
        `gatsby-plugin-sitemap`,
        'gatsby-plugin-robots-txt',
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        "gatsby-plugin-postcss",
        {
            resolve: "gatsby-plugin-purgecss",
            options: {
                tailwind: true,
                purgeOnly: ["src/css/index.css"],
            },
        },
        `gatsby-plugin-typescript`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/geekshub-black-logo.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: "gatsby-plugin-eslint",
            options: {
                test: /\.ts$|\.tsx$/,
                exclude: /(node_modules|.cache|public)/,
                stages: ["develop", "build-javascript"],
                options: {
                    emitWarning: true,
                    failOnError: false,
                },
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // replace "UA-XXXXXXXXX-X" with your own Tracking ID
                trackingId: "UA-177862097-1",
            },
        },
        {
            resolve: `gatsby-plugin-gtag`,
            options: {
                // your google analytics tracking id
                trackingId: `GTM-W3TS99H`,
                // Puts tracking script in the head instead of the body
                head: false,
                // enable ip anonymization
                anonymize: true,
            },
        },

        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
