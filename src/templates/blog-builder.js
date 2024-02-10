import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '@/components/Layout'
import DefaultHead from '@/components/Head/DefaultHead'
import BlogBuilder from '../Builders/BlogBuilder'

const Blog = ({ data }) => {
  const bgImage =   typeof data.blog.frontmatter?.photo === 'string' ? data.blog.frontmatter?.photo : data.blog.frontmatter?.photo?.image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src
   
  const object = {
    'title': data.blog.frontmatter.title,
    'excerpt' : data.blog.frontmatter.excerpt,
    'body' : data.blog.rawMarkdownBody,
    'thumbnail': bgImage,
    'date': data.blog.frontmatter.date,
    'showTime': true
  };
  return (
    <Layout nav={true}>
      <BlogBuilder data={object} />
    </Layout>
  )
}

Blog.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const Head = ({ data }) => (
  <DefaultHead data={data.blog.frontmatter.seo}>
    {/* Additonal values here */}
    <meta id="oty" property="og:type" content="article" />
  </DefaultHead>
)

export default Blog

export const basicPageQuery = graphql`
  query PostQuery($id: String!) {
    blog: markdownRemark(id: { eq: $id }) {
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
