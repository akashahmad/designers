module.exports = {
    siteMetadata: {
        title: `GeeksHub`,
        description: `We are working with the modern technologies to build web applications and hybrid applications in both corporate and startup environments with broad and diverse experience that balance code, cost, user experience and performance.`,
        author: `AK`,
        siteUrl: `https://www.geekshub.io`,

    },
    plugins: [
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                serialize: [
                    {
                        url: `https://www.geekshub.io/`,
                        lastmod: `2020-09-14T22:43:01+00:00`,
                        priority: 1.0,
                    }, {
                        url: `https://www.geekshub.io/our-services/`,
                        lastmod: `2020-09-14T22:44:03+00:00`,
                        priority: 0.9,
                    }, {
                        url: `https://www.geekshub.io/contact-us/`,
                        lastmod: `2020-09-14T22:44:22+00:00`,
                        priority: 0.8,
                    }, {
                        url: `https://www.geekshub.io/who-we-are/`,
                        lastmod: `2020-09-14T22:44:51+00:00`,
                        priority: 0.7,
                    }, {
                        url: `https://www.geekshub.io/privacy-policy/`,
                        lastmod: `2020-09-14T22:45:07+00:00`,
                        priority: 0.6,
                    }
                ]
            }
        },
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
                trackingId: "G-9GZ3KCH7SE",
            },
        },
        {
            resolve: `gatsby-plugin-gtag`,
            options: {
                // your google analytics tracking id
                trackingId: `G-9GZ3KCH7SE`,
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
