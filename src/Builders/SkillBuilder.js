
import React from 'react'
import moment from 'moment'
import Text from '../components/UI/Text'

import { Link as GatsbyLink } from 'gatsby'
import Image from '../resolvers/Image'
import SkillRelatedProjects from '../components/Project/SkillRelated'
import SkillRelatedTips from '../components/Tip/SkillRelated'

export default function SkillBuilder(data) {
    
    return (
        <>
            <div className='bg-cover bg-center'>
                <div className='bg-headerSocialBg dark:bg-gray-500 bg-opacity-50 flex flex-col md:flex-row shadow text-white'>
                    <div className='flex-0 md:flex-1 py-5 md:mx-auto max-w-screen-xl'>
                        <nav className="flex mx-4" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center">
                                    <div className="flex items-center">
                                        <GatsbyLink to="/skills" className="inline-flex items-center h-6 text-sm text-white hover:text-gray-300 font-medium dark:text-white dark:hover:text-white">
                                            My Skills
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
                        <article className="mx-auto w-full max-w-screen-xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                            <header className="not-format flex flex-col md:flex-row md:space-x-5">
                                <Image src={data?.data?.thumbnail} className="flex-0 w-16 h-16 my-auto border shadow rounded rounded-full" />
                                <div className='flex-1 flex flex-col'>
                                    <h1 className="mt-4 lg:mt-6 text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl dark:text-white">{data.data.title}</h1>
                                    <div className="text-md font-bold text-gray-900 dark:text-white">
                                        {data.data.experience}
                                    </div>
                                    <Text className={'text-xl mb-4 lg:md-6 text-gray-500 blog-text w-full'}>
                                        {data.data.body}
                                    </Text>
                                </div>
                            </header>
                            <SkillRelatedProjects id={data.data.id} />
                            <SkillRelatedTips id={data.data.id} />
                        </article>
                    </div>
                </main>
            </div>

        </>
    )
}