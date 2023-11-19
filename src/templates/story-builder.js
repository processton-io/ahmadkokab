import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '@/components/Layout'
import DefaultHead from '@/components/Head/DefaultHead'
import StoryBuilder from '../Builders/StoryBuilder'

const Story = ({ data }) => {
  
  const bgImage =   typeof data.story.frontmatter?.photo === 'string' ? data.story.frontmatter?.photo : data.story.frontmatter?.photo?.image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src
   
  const object = {
    'title': data.story.frontmatter.title,
    'excerpt' : data.story.frontmatter.excerpt,
    'body' : data.story.rawMarkdownBody,
    'thumbnail': bgImage,
    'date': data.story.frontmatter.date,
    'showTime': true
  };
  return (
    <Layout nav={true}>
      <StoryBuilder data={object} />
    </Layout>
  )
}

Story.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const Head = ({ data }) => (
  <DefaultHead data={data.story.frontmatter.seo}>
    {/* Additonal values here */}
    <meta id="oty" property="og:type" content="article" />
  </DefaultHead>
)

export default Story

export const basicPageQuery = graphql`
  query PostQuery($id: String!) {
    story: markdownRemark(id: { eq: $id }) {
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
