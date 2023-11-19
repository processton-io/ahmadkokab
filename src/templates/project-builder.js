import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '@/components/Layout'
import DefaultHead from '@/components/Head/DefaultHead'
import ProjectBuilder from '../Builders/ProjectBuilder'


const Project = ({ data }) => {
  
  const bgImage =   typeof data.project.frontmatter?.photo === 'string' ? data.project.frontmatter?.photo : data.project.frontmatter?.photo?.image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src
   
  const object = {
    'title': data.project.frontmatter.title,
    'excerpt' : data.project.frontmatter.excerpt,
    'body' : data.project.rawMarkdownBody,
    'thumbnail': bgImage,
    'date': data.project.frontmatter.date,
    'showTime': true
  };
  return (
    <Layout nav={true}>
      <ProjectBuilder data={object} />
    </Layout>
  )
}

Project.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const Head = ({ data }) => (
  <DefaultHead data={data.project.frontmatter.seo}>
    {/* Additonal values here */}
    <meta id="oty" property="og:type" content="article" />
  </DefaultHead>
)

export default Project

export const basicPageQuery = graphql`
  query PostQuery($id: String!) {
    project: markdownRemark(id: { eq: $id }) {
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
