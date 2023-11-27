import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '@/components/Layout'
import DefaultHead from '@/components/Head/DefaultHead'
import TipBuilder from '../Builders/TipBuilder'

const Tip = ({ data }) => {
  
  const object = {
    'title': data.tip.frontmatter.title,
    'code': data.tip.frontmatter.code,
    'skills': data.skills.edges,
    'body' : data.tip.rawMarkdownBody.edges
  };
  console.log(object)
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
  query PostQuery($id: String!, $skillids: [String]!) {
    tip: markdownRemark(id: { eq: $id }) {
      id
      html
      rawMarkdownBody
      frontmatter {
        id
        title
        type
        permalink
        code {
          code
          lang
        }
        skills
        ...Seo
      }
    },
    skills: allMarkdownRemark(
      filter: {frontmatter: {layout: {eq: "skill-builder"}, id: {in: $skillids}}}
    ) {
      edges {
        node {
            id
            html
            rawMarkdownBody
            frontmatter {
              id
              title
              permalink
              photo {
                  alt
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
            }
        }
      }

    }
  }
`
