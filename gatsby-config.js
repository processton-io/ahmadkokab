const path = require('path')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: process.env.GATSBY_WEB_URL || 'http://localhost:8000',
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-preload-fonts',
    'gatsby-plugin-image',
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-postcss',
    'gatsby-plugin-recaptcha',
    {
      resolve: 'gatsby-plugin-brotli',
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              quality: 72,
              withWebp: true,
              withAvif: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        resolveSiteUrl: () =>
          process.env.GATSBY_WEB_URL || 'http://localhost:8000',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src'),
        '~': path.join(__dirname, ''),
        styles: path.join(__dirname, 'src/styles'),
        img: path.join(__dirname, 'static/img'),
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        manualInit: true,
        modulePath: `${__dirname}/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-background-image-es5',
      options: {
        specialChars: '/:',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: process.env.GATSBY_WEB_URL || 'http://localhost:8000',
        sitemap: process.env.GATSBY_WEB_URL || 'http://localhost:8000' + '/sitemap-0.xml',
        policy: [{userAgent: '*', disallow: [
          
        ]}]
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: "gatsby-plugin-sitemap",
      excludes: [
        
      ]
    },
    
    // `gatsby-plugin-csp`,
    //{
    //  resolve: `gatsby-plugin-csp`,
    //  options: {
    //    disableOnDev: false,
    //    reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
    //    mergeScriptHashes: false, // you can disable scripts sha256 hashes
    //    mergeStyleHashes: false, // you can disable styles sha256 hashes
    //    mergeDefaultDirectives: true,
    //    directives: {
    //      // "script-src": "'self' ",
    //      'default-src': `'self' data: 'unsafe-inline' ${process.env.GATSBY_WEB_URL || 'http://localhost:8000'} https://www.google-analytics.com https://www.googleanalytics.com https://www.google.com;`,
    //      'script-src': `'self' data: 'unsafe-inline' 'unsafe-eval' ${process.env.GATSBY_WEB_URL || 'http://localhost:8000'} https://www.google-analytics.com https://www.googleanalytics.com https://www.google.com https://www.gstatic.com/; script-src-elem 'self' data: 'unsafe-inline' 'unsafe-eval' ${process.env.GATSBY_WEB_URL || 'http://localhost:8000'} https://www.google-analytics.com https://www.googleanalytics.com https://www.google.com https://www.gstatic.com/; script-src-attr 'self' data: 'unsafe-inline' 'unsafe-eval' ${process.env.GATSBY_WEB_URL || 'http://localhost:8000'} https://www.google-analytics.com https://www.googleanalytics.com https://www.google.com https://www.gstatic.com/;`,
    //      'style-src': `'self' data: 'unsafe-inline' ${process.env.GATSBY_WEB_URL || 'http://localhost:8000'} https://www.google-analytics.com https://www.googleanalytics.com https://www.google.com; style-src-elem 'self' data: 'unsafe-inline' ${process.env.GATSBY_WEB_URL || 'http://localhost:8000'} https://www.google-analytics.com https://www.googleanalytics.com https://www.google.com; style-src-attr 'self' data: 'unsafe-inline' ${process.env.GATSBY_WEB_URL || 'http://localhost:8000'} https://www.google-analytics.com https://www.googleanalytics.com https://www.google.com;`,
    //      "img-src": `'self' ${process.env.GATSBY_WEB_URL || 'http://localhost:8000'} https://www.google-analytics.com https://www.googleanalytics.com https://www.google.com`,
    //      // "connect-src": "https://google-analytics.com https://analytics.google.com https://googletagmanager.com https://g.doubleclick.net https://google.com https://google.com;"
    //    }
    //  }
    //},
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GATSBY_GOOGLE_GA || "GA-TRACKING_ID", // Google Analytics / GA
          process.env.GATSBY_GOOGLE_AW_CONVERSION_ID || "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          process.env.GATSBY_GOOGLE_DC_FLOODIGHT_ID || "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: process.env.GATSBY_GOOGLE_OPT_CONTAINER_ID || "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: "https://www.googletagmanager.com",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeCachingHeaders: false
      },
    }
  ],
}
