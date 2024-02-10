import React from "react"
import { graphql } from "gatsby"
import  Layout from "../components/Layout"
import BlogsBuilder from "../Builders/BlogsBuilder"
export default class BlogListTemplate extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const pageContext = this.props.pageContext
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    return (
      <Layout nav={true}>
        <BlogsBuilder posts={posts} pageContext={pageContext} totalCount={totalCount} />
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
        sort: { frontmatter: { date: DESC }}
        filter: {frontmatter: {layout: {eq: "blog-builder"}}}
        limit: $limit
        skip: $skip
    ) {
        totalCount
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
                    excerpt
                }
            }
        }
    }
}
`