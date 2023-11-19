
import React from 'react'
import moment from 'moment'
import Text from '../components/UI/Text'

import { Link as GatsbyLink } from 'gatsby'
import Image from '../resolvers/Image'

export default function SkillBuilder(data) {
    
    return (
        <>
            <div className='bg-cover bg-center'>
                <div className='bg-headerSocialBg dark:bg-gray-500 bg-opacity-50 flex flex-col md:flex-row shadow text-white'>
                    <div className='flex-0 md:flex-1 px-12 py-5  max-w-screen-xl mx-auto'>
                        <nav className="flex" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center">
                                    <GatsbyLink to="/" className="inline-flex items-center text-sm text-white hover:text-gray-300 font-medium dark:text-white dark:hover:text-white">
                                        <svg aria-hidden="true" className="w-4 h-4 mr-2 hidden md:block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                        Home
                                    </GatsbyLink>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg aria-hidden="true" className="w-6 h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                        <GatsbyLink to="/skills" className="ml-1 text-sm font-medium  md:ml-2  text-white hover:text-gray-300 dark:text-white dark:hover:text-white">
                                            Skills
                                        </GatsbyLink>
                                    </div>
                                </li>
                                <li aria-current="page">
                                    <div className="flex items-center">
                                        <svg aria-hidden="true" className="w-6 h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                        <span className="ml-1 text-sm font-medium md:ml-2 text-white hover:text-gray-300 dark:text-white">{data.data.title}</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <main className="pt-2 md:pt-8 pb-16 lg:pt-8 lg:pb-24 mx-6 md:mx-auto rounded-md" >
                <div className="flex justify-between px-6 md:px-8 mx-auto max-w-screen-xl">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6 not-format flex flex-row space-x-5">
                            <Image src={data?.data?.thumbnail} className="flex-0 w-16 h-16 my-auto" />
                            <div className='flex-1'>
                                <h1 className="mb-4 mt-4 lg:mt-6 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{data.data.title}</h1>
                                <Text className={'text-xl mb-4 lg:md-6 text-gray-500 blog-text'}>
                                    {data.data.excerpt}
                                </Text>
                            </div>
                        </header>
                        
                        <Text className={'text-xl text-grey-500 blog-text'}>
                            {data.data.body}
                        </Text>
                        
                    </article>
                </div>
            </main>

        </>
    )
}