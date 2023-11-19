import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '@/components/Layout'
import DefaultHead from '@/components/Head/DefaultHead'
import TipBuilder from '../Builders/TipBuilder'

const Tip = ({ data }) => {
  
  const bgImage =   typeof data.tip.frontmatter?.photo === 'string' ? data.tip.frontmatter?.photo : data.tip.frontmatter?.photo?.image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src
   
  const object = {
    'title': data.tip.frontmatter.title,
    'excerpt' : data.tip.frontmatter.excerpt,
    'body' : data.tip.rawMarkdownBody,
    'thumbnail': bgImage,
    'date': data.tip.frontmatter.date,
    'showTime': true
  };
  return (
    <Layout nav={true}>
      <TipBuilder data={object} />
    </Layout>
  )
}

Tip.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const Head = ({ data }) => (
  <DefaultHead data={data.tip.frontmatter.seo}>
    {/* Additonal values here */}
    <meta id="oty" property="og:type" content="article" />
  </DefaultHead>
)

export default Tip

export const basicPageQuery = graphql`
  query PostQuery($id: String!) {
    tip: markdownRemark(id: { eq: $id }) {
      id
      html
      rawMarkdownBody
      frontmatter {
        id
        title
        author
        excerpt
        type
        date
        permalink
        
        photo {
          image {
            childImageSharp {
              gatsbyImageData(
                width: 800
                quality: 72
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        ...Seo
      }
    }
  }
`
