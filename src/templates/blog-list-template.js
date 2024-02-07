import React from "react"
import { graphql } from "gatsby"
import  Layout from "../components/Layout"
import Image from "../resolvers/Image"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import { BgImage } from 'gbimage-bridge';
import Button from "../components/UI/Button"
import clsx from "clsx"
import { Link as GatsbyLink } from 'gatsby'
export default class BlogListTemplate extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout nav={true}>
        <div className="mx-auto max-w-screen-xl lg:mt-16 lg:mb-8 my-8 px-4">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">My Blog</h2>
        </div> 
        <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
            
            {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.frontmatter.permalink
                const image = getImage(node.frontmatter.photo?.image)
                const excerpt = node.frontmatter.excerpt
                
                return <GatsbyLink to={node.frontmatter.permalink} key={node.frontmatter.permalink} className="bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700">
                    <BgImage image={image} className='bg-cover h-48 md:h-36 bg-no-repeat bg-bottom'></BgImage>
                    <div className={clsx("p-5  flex items-stretch flex-col ")}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-auto md:h-24">{title}</h5>
                        <div className={clsx("mb-3 pt-1 overflow-hidden font-normal text-gray-700 dark:text-gray-400 text-md",{
                            "h-auto md:h-24": image !== undefined,
                            "h-auto md:h-56": image == undefined
                        })}>{excerpt}</div>
                    </div>
                </GatsbyLink>

            })}
        </div>
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