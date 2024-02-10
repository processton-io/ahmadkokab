import React from "react"
import { graphql } from "gatsby"
import  Layout from "../components/Layout"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from 'gbimage-bridge';
import { Link as GatsbyLink } from 'gatsby'
export default class StoriesListTemplate extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout nav={true}>
        <div className="pb-12">
            <div className="mx-auto container max-w-screen-xl lg:my-12 my-8 px-4">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">My Stories</h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Some development stories.</p>
            </div> 
            <div className="container max-w-screen-xl mx-auto px-4 min-h-40vh">
                
                {posts.map(({ node }) => {
                    const title = node.frontmatter.title || node.frontmatter.permalink
                    const excerpt = node.frontmatter.excerpt
                    const image = getImage(node.frontmatter.photo?.image)
                    
                    return <GatsbyLink to={node.frontmatter.permalink} key={node.frontmatter.permalink} className="w-full flex flex-col md:flex-row bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700">
                        <BgImage image={image} className='bg-cover w-full h-48 md:h-auto md:w-2/5 lg:w-1/5 bg-no-repeat bg-bottom'></BgImage>
                        <div className="p-5 w-full md:w-3/5 lg:w-4/5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{excerpt}</p>
                        </div>
                    </GatsbyLink>

                })}
                {posts.length < 4 && <div className="w-full border border-dotted border-4 mt-12 p-8 text-center">
                    <h6  className="text-2xl text-center text-gray-500 dark:text-gray-300 max-w-screen-md mx-auto w-full">I am very excited to share some of exciting development stories but due to time constrain i am unable to right.</h6>
                </div>}
            </div>
        </div>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
query storyListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
        sort: { frontmatter: { date: DESC }}
        filter: {frontmatter: {layout: {eq: "story-builder"}}}
        limit: $limit
        skip: $skip
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
                    excerpt
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