
import React from 'react'
import moment from 'moment'
import Text from '../components/UI/Text'

import { Link as GatsbyLink } from 'gatsby'
import Image from '../resolvers/Image'

export default function BlogBuilder(data) {
    return (
        <>
            <div className='bg-cover bg-center'>
                <div className='bg-headerSocialBg dark:bg-gray-500 bg-opacity-50 flex flex-col md:flex-row shadow text-white'>
                    <div className='flex-0 md:flex-1 py-5 md:mx-auto max-w-screen-xl'>
                        <nav className="flex mx-4" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center">
                                    <div className="flex items-center">
                                        <GatsbyLink to="/blogs" className="inline-flex items-center h-6 text-sm text-white hover:text-gray-300 font-medium dark:text-white dark:hover:text-white">
                                            My Blogs
                                        </GatsbyLink>
                                    </div>
                                </li>
                                <li className="inline-flex items-center">
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
            <div className='px-4'>
                <main className="my-8 mx-6 mb-12 p-6 min-h-60vh md:mx-auto rounded-md mx-auto max-w-screen-xl bg-white dark:bg-gray-800 rounded" >
                    <div className="flex justify-between">
                        <article className="mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                            <header className="mb-4 lg:mb-6 not-format">
                                <div className='flex flex-row'>
                                    <h1 className="flex-1 mb-4 mt-4 lg:mt-6 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{data.data.title}</h1>
                                    { data?.data?.showTime && data?.data?.showTime === true && 
                                        <div className='flex-0'>
                                            <p className='font-medium text-gray-900 text-right'>{moment(data.data.date).format("MMM Do YYYY")}</p>
                                        </div>
                                    }
                                </div>
                                <Text className={'text-xl mb-4 lg:md-6 text-gray-500 blog-text max-w-screen-xl'}>
                                    {data.data.excerpt}
                                </Text>
                                <Image src={data?.data?.thumbnail} className="flex-0 w-full h-auto my-auto max-h-xl border my-4 shadow" />
                            </header>
                            
                            <Text className={'text-xl text-grey-500 blog-text max-w-screen-xl'}>
                                {data.data.body}
                            </Text>
                            
                        </article>
                    </div>
                </main>

            </div>
        </>
    )
}