
import React from 'react'
import moment from 'moment'
import Text from '../components/UI/Text'
import Image from "../resolvers/Image"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import { BgImage } from 'gbimage-bridge';
import Button from "../components/UI/Button"
import clsx from "clsx"

import { Link as GatsbyLink } from 'gatsby'

export default function BlogsBuilder({posts, pageContext, totalCount}) {

    return (
        <>
            <div className='bg-cover bg-center'>
                <div className='bg-headerSocialBg dark:bg-gray-500 bg-opacity-50 flex flex-col md:flex-row shadow text-white'>
                    <div className='flex-0 md:flex-1 py-5 md:mx-auto max-w-screen-xl'>
                        <nav className="flex mx-4" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center">
                                    <GatsbyLink to="/blogs" className="inline-flex items-center h-6 text-sm text-white hover:text-gray-300 font-medium dark:text-white dark:hover:text-white">
                                        My Blogs
                                    </GatsbyLink>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="px-4">
                <div className="my-4 md:my-8 mx-6 mb-12 p-4 md:p-6 min-h-60vh md:mx-auto rounded-md mx-auto max-w-screen-xl bg-white dark:bg-gray-800 rounded">
                    <div className="">
                        <h2 className="text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">My Blogs</h2>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400"></p>
                    </div> 
                    <div className="container max-w-screen-xl mt-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
                        
                        {posts.map(({ node }) => {
                            const title = node.frontmatter.title || node.frontmatter.permalink
                            const image = getImage(node.frontmatter.photo?.image)
                            const excerpt = node.frontmatter.excerpt
                            
                            return <GatsbyLink to={node.frontmatter.permalink} key={node.frontmatter.permalink} className="bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
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
                    {totalCount < 4 && <div className="w-full border border-dotted border-4 mt-12 p-8 text-center">
                        <h6  className="text-2xl text-center text-gray-500 dark:text-gray-300 max-w-screen-md mx-auto w-full">I am very excited to share some of exciting development stories but due to time constrain i am unable to right.</h6>
                    </div>}
                    {pageContext.blogPages > 1 &&
                        <div className="mx-auto max-w-screen-xl lg:mt-12 lg:mb-8 my-8 px-4">
                            <nav className="text-center rounded-md mx-auto  divide-x" >
                                {[...Array(pageContext.blogPages)].map((x, i) =>
                                    <GatsbyLink 
                                        to={`/blogs/`+((i+1) == 1 ? '' : (i+1))} 
                                        className={clsx("relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",{
                                            "bg-sky-600 dark:bg-gray-600 ": (i+1) == pageContext.currentPage,
                                            "bg-sky-500 dark:bg-gray-500 hover:bg-sky-700 dark:hover:bg-gray-700": (i+1) != pageContext.currentPage,
                                            "rounded-l-md": i == 0,
                                            "rounded-r-md": i == (pageContext.blogPages-1)
                                        
                                        })}
                                    >{(i+1)}</GatsbyLink>
                                )}
                            </nav>
                        </div>
                    }
                </div>
            </div>

        </>
    )
}