import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '@/components/Layout'
import DefaultHead from '@/components/Head/DefaultHead'
import SkillBuilder from '../Builders/SkillBuilder'

const Skill = ({ data }) => {
  
  const bgImage =   typeof data.skill.frontmatter?.photo === 'string' ? data.skill.frontmatter?.photo : data.skill.frontmatter?.photo?.image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src
   
  const object = {
    'id': data.skill.frontmatter.id,
    'title': data.skill.frontmatter.title,
    'excerpt' : data.skill.frontmatter.excerpt,
    'experience': data.skill.frontmatter.experience,
    'body' : data.skill.rawMarkdownBody,
    'thumbnail': bgImage,
    'date': data.skill.frontmatter.date,
    'showTime': true
  };
  return (
    <Layout nav={true}>
      <SkillBuilder data={object} />
    </Layout>
  )
}

Skill.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const Head = ({ data }) => (
  <DefaultHead data={data.skill.frontmatter.seo}>
    {/* Additonal values here */}
    <meta id="oty" property="og:type" content="article" />
  </DefaultHead>
)

export default Skill

export const basicPageQuery = graphql`
  query PostQuery($id: String!) {
    skill: markdownRemark(id: { eq: $id }) {
      id
      html
      rawMarkdownBody
      frontmatter {
        id
        title
        author
        excerpt
        experience
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
