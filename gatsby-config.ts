import type {GatsbyConfig} from "gatsby";

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
    siteMetadata: {
        title: `test`,
        siteUrl: `https://www.test.com`
    },

    plugins: ["gatsby-plugin-postcss",
        `gatsby-plugin-svgr`,
        {
            resolve: `gatsby-source-strapi`,
            options: {
                apiURL: process.env.STRAPI_URL,
                collectionTypes: ["post", "blog", "our-value", "user"],
            },
        },
        "gatsby-transformer-remark",
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `poppins\:300,400,500,600,700`
                ],
                display: 'swap',
            },
        },
    ]
};

export default config;
