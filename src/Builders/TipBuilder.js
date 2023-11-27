
import React from 'react'
import moment from 'moment'
import Text from '../components/UI/Text'
import { CodeBlock, dracula } from 'react-code-blocks';
import SkillBadge from '../components/Skills/SkillBadge';
import clsx from 'clsx';


export default function TipBuilder({data}) {
    
    return (
        <>
            <main className="pt-2 md:pt-8 pb-16 lg:pt-8 lg:pb-24 bg-white dark:bg-gray-900 mx-auto container max-w-screen-xl mx-6 mt-6 md:mx-auto rounded-md" >
                <div className="flex justify-between px-6 md:px-8 mx-auto max-w-screen-xl">
                    <article className="mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6 not-format">
                            <h1 className="mb-4 mt-4 lg:mt-6 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{data.title}</h1>
                        </header>
                        {(data.skills) && <div className='mb-4 lg:mb-4 space-y-2'>
                            <span className='text-lg font-semibold mr-4 block align-top h-8'>Skills Involved:</span>
                            {data.skills.map((skill, index) => {
                                return <SkillBadge data={skill.node} className={clsx({'mr-4': index < data.skills.length})} />
                            })}
                        </div>}
                        {(data.code && data.code.code) && <div className='mb-4 lg:mb-4'>
                            <span className='text-lg font-semibold inline-block mb-4'>Code:</span>
                            <CodeBlock
                                text={data.code.code}
                                language={data.code.lang}
                                showLineNumbers={true}
                                theme={dracula} />
                        </div>}
                        {(data.body) && <div className='mb-4 lg:mb-4'>
                            <span className='text-lg font-semibold inline-block mb-4'>description:</span>
                            <Text className={'text-xl text-grey-500 blog-text'}>
                                {data.body}
                            </Text>
                        </div>}
                        
                    </article>
                </div>
            </main>

        </>
    )
}