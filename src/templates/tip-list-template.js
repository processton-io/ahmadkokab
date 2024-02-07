import React from "react"
import { graphql } from "gatsby"
import  Layout from "../components/Layout"
import Image from "../resolvers/Image"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import { BgImage } from 'gbimage-bridge';
import Button from "../components/UI/Button"
import { Link as GatsbyLink } from 'gatsby'
import clsx from "clsx"
export default class TipListTemplate extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout nav={true}>
        <div className="mx-auto container max-w-screen-xl lg:my-16 my-8 px-4">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Code Tips</h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Randome code snippets.</p>
        </div> 
        <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
            
            {posts.map(({ node }) => {
                const {frontmatter} = node;
                const {title, code} = frontmatter;
                
                return <GatsbyLink key={node.frontmatter.permalink} to={node.frontmatter.permalink} className="w-full flex flex-col md:flex-row bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className={clsx("p-5  flex items-stretch flex-col ")}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                        <div className={clsx("mb-3 pt-1 overflow-hidden font-normal text-gray-700 dark:text-gray-400 text-md",{
                        })}>{code.lang}</div>
                    </div>
                </GatsbyLink>

            })}
        </div>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
query tipListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
        sort: { frontmatter: { date: DESC }}
        filter: {frontmatter: {layout: {eq: "tip-builder"}}}
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
                    code {
                        code
                        lang
                    }
                    type
                    title
                    skills
                }
            }
        }
    }
}
`