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
    const categories = ["front_end", "backend" ,"dev_ops","windows_services"]
    return (
      <Layout nav={true}>
        <div className="mx-auto container max-w-screen-xl lg:my-16 my-8 px-4">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">My Skills</h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400"></p>
        </div>
        {categories.map(({category}) => { 
            <>
                <h3 className="mb-4 text-2xl lg:text-xl tracking-tight font-bold text-gray-700 dark:text-white">{getCategoryTitle(category)}</h3>
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 md:gap-6 md:grid-cols-2 lg:grid-cols-4 px-4">
                    {posts.map(({ node }) => {
                        if(node.frontmatter.type === category){
                            return <SkillCard node={node} />
                        }else{
                            return <></>
                        }
                    })}
                </div>
            </>
        })}
      </Layout>
    )
  }
}

function getCategoryTitle (category){
    switch(category){
        case "front_end":
            return "Front End"
        case "backend":
            return "Back End"
        case "dev_ops":
            return "Dev Ops"
        case "windows_services":
            return "Windows Services"
        default:
            return "Other"
}

function SkillCard(node){

    const title = node.frontmatter.title || node.frontmatter.permalink
    const image = getImage(node.frontmatter.photo?.image)
    
    return <GatsbyLink to={node.frontmatter.permalink} key={node.frontmatter.permalink} className="flex flex-col border px-4 pb-4 bg-white text-black hover:text-white hover:bg-gradient-to-r active:text-white active:bg-gradient-to-r from-sky-800 from-10% via-sky-500 via-30% to-sky-300 to-90% space-y-4 relative overflow-hidden">
        <div class="absolute right-0 top-0 h-16 w-16">
            <div
                class="absolute transform rotate-45 text-white bg-gradient-to-r from-green-800 from-10% via-green-500 via-30% to-green-300 to-90% text-center text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px]">
                12+ years
            </div>
        </div>
        <div className="text-center">
            <BgImage image={image} className='bg-cover h-24 w-24 object-contain mt-4 rounded-sm inline-block'></BgImage>
        </div>
        <div className="text-center">
            <Title Tag='h6' variant='xs' className='mb-4 short_description'>
                {title}
            </Title>
        </div> 
    </GatsbyLink>
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