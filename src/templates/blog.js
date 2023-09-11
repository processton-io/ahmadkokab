import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '@/components/Layout'
import DefaultHead from '../components/Head/DefaultHead'
import Blog from '../components/Blog';

const Post = ({ data }) => {
  
  const bgImage =   typeof data.post.frontmatter?.photo === 'string' ? data.post.frontmatter?.photo : data.post.frontmatter?.photo?.image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src
   
  const object = {
    'title': data.post.frontmatter.title,
    'excerpt' : data.post.frontmatter.excerpt,
    'body' : data.post.rawMarkdownBody,
    'thumbnail': bgImage,
    'date': data.post.frontmatter.date,
    'showTime': true
  };
  return (
    <Layout nav={true}>
      <Blog data={object} />
    </Layout>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const Head = ({ data }) => (
  <DefaultHead data={data.post.frontmatter.seo}>
    {/* Additonal values here */}
    <meta id="oty" property="og:type" content="article" />
  </DefaultHead>
)

export default Post

export const basicPageQuery = graphql`
  query PostQuery($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
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
