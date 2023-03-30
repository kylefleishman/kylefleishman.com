/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Kyle Fleishman',
    author: {
      name: 'Kyle Fleishman',
    },
    pathPrefix: '/',
    siteUrl: 'https://www.kylefleishman.com',
    description:
      'Network Engineer and Software Developer, and loving every second!',
    logo: 'https://www.kylefleishman.com/blue-potion.png',
  },
  
  plugins: [`gatsby-plugin-react-helmet`],
}
