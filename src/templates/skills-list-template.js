import React from "react"
import { graphql } from "gatsby"
import  Layout from "../components/Layout"
import SkillsBuilder from "../Builders/SkillsBuilder"
export default class SkillsListTemplate extends React.Component {

  render() {
    return (
      <Layout nav={true}>
        <SkillsBuilder data={this.props.data} />
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
query skillListQuery {
    allMarkdownRemark(
        filter: {frontmatter: {layout: {eq: "skill-builder"}}}
    ) {
        edges {
            node {
                id
                fields {
                    slug
                }
                frontmatter {
                    id
                    layout
                    permalink
                    type
                    title
                    experience
                    photo {
                        alt
                        image {
                            childImageSharp {
                                gatsbyImageData(
                                width: 64
                                quality: 72
                                placeholder: DOMINANT_COLOR
                                formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                    }
                    excerpt
                }
            }
        }
    }
}
`