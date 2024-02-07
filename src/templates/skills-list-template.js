import React from "react"
import { graphql } from "gatsby"
import  Layout from "../components/Layout"
import Image from "../resolvers/Image"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import { BgImage } from 'gbimage-bridge';
import Button from "../components/UI/Button"
import Title from "../components/UI/Title"
import { Link as GatsbyLink } from 'gatsby'
export default class SkillsListTemplate extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout nav={true}>
        <div className="mx-auto container max-w-screen-xl lg:my-16 my-8 px-4">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">My Skills</h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400"></p>
        </div> 
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 md:gap-6 md:grid-cols-2 lg:grid-cols-4 px-4">
            
            {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.frontmatter.permalink
                const image = getImage(node.frontmatter.photo?.image)
                
                return <GatsbyLink to={node.frontmatter.permalink} key={node.frontmatter.permalink} className="flex flex-col border px-4 pb-4 bg-white text-black hover:bg-sky-300 space-y-4">
                    <div className="text-center">
                        <BgImage image={image} className='bg-cover h-24 w-24 object-contain mt-4 rounded-sm inline-block'></BgImage>
                    </div>
                    <div className="text-center">
                        <Title Tag='h6' variant='xs' className='mb-4 short_description'>
                            {title}
                        </Title>
                    </div> 
                </GatsbyLink>

            })}
        </div>
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