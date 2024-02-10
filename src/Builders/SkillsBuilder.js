
import React from 'react'
import moment from 'moment'
import Text from '../components/UI/Text'

import { Link as GatsbyLink } from 'gatsby'
import Image from "../resolvers/Image"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import { BgImage } from 'gbimage-bridge';
import Title from "../components/UI/Title"
import SkillRelatedProjects from '../components/Project/SkillRelated'
import SkillRelatedTips from '../components/Tip/SkillRelated'

export default function SkillsBuilder(data) {
    const posts = data.data.allMarkdownRemark.edges
    const categories = ["front_end", "backend" ,"dev_ops","windows_services"]

    
    const getCategoryTitle  = (category) => {
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
    }


    return (
        <>
            <div className='bg-cover bg-center'>
                <div className='bg-headerSocialBg dark:bg-gray-500 bg-opacity-50 flex flex-col md:flex-row shadow text-white'>
                    <div className='flex-0 md:flex-1 py-5 md:mx-auto max-w-screen-xl'>
                        <nav className="flex mx-4" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center">
                                    <GatsbyLink to="/skills" className="inline-flex items-center h-6 text-sm text-white hover:text-gray-300 font-medium dark:text-white dark:hover:text-white">
                                        My Skills
                                    </GatsbyLink>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className='px-4'>
                <div className="my-4 md:my-8 mx-6 mb-12 p-4 md:p-6 min-h-60vh md:mx-auto rounded-md mx-auto max-w-screen-xl bg-white dark:bg-gray-800 rounded">
                    <div className="">
                        <h2 className="text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">My Skills</h2>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400"></p>
                    </div>
                    {categories.map((category) => {
                        return <>
                            <div className="mx-auto max-w-screen-xl">
                                <h3 className="my-4 mt-8 text-2xl lg:text-xl tracking-tight font-bold text-gray-700 dark:text-white md:px-4">{getCategoryTitle(category)}</h3>
                            </div>
                            <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-3 md:gap-6 md:grid-cols-2 lg:grid-cols-5 md:px-4">
                                {posts.map(({ node }) => {
                                    if(node.frontmatter.type === category){
                                        const title = node.frontmatter.title || node.frontmatter.permalink
                                        const image = getImage(node.frontmatter.photo?.image)
                                        
                                        return <GatsbyLink to={node.frontmatter.permalink} key={node.frontmatter.permalink} className="
                                        flex flex-col border px-4 pb-4 rounded rounded-md
                                        text-black dark:text-white dark:hover:text-white dark:active:text-white
                                        bg-white hover:bg-headerSocialBg hover:bg-opacity-70 active:bg-headerSocialBg dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-600
                                        space-y-4 relative overflow-hidden ">
                                            <div class="absolute right-0 top-0 h-16 w-16">
                                                <div
                                                    class="absolute transform rotate-45 text-white bg-gradient-to-r from-green-800 from-10% via-green-500 via-30% to-green-300 to-90% text-center text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px]">
                                                    {node.frontmatter.experience}
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <BgImage image={image} className='bg-cover h-24 w-24 object-contain mt-4 rounded-sm inline-block'></BgImage>
                                            </div>
                                            <div className="text-center">
                                                <Title Tag='h6' variant='xs' className='mb-4 short_description '>
                                                    {title}
                                                </Title>
                                            </div> 
                                        </GatsbyLink>
                                    }else{
                                        return <></>
                                    }
                                })}
                            </div>
                        </>
                    })}
                </div>
            </div>

        </>
    )
}