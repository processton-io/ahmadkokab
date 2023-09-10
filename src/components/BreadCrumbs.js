import React from 'react'
import moment from 'moment'

export default function BreadCrumbs({breadcrumbs}) {
    return (
        <div className='w-full shadow'>
            <div className="container max-w-screen-xl mx-auto px-8 py-4 ">
                <nav className="flex" aria-label="Breadcrumb" >
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        {breadcrumbs.map((breadcrumb, index) => {
                            return <li className="inline-flex items-center">
                                <a href={breadcrumb.breadcrumb_item.link} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    {index === 0 && ( <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                    </svg> )}
                                    {breadcrumb.breadcrumb_item.title}
                                    {(index + 1) < breadcrumbs.length && ( 
                                    <svg className="w-3 h-3 text-gray-400 mx-1 ml-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                    </svg> )}
                                </a>
                            </li>
                        })}
                    </ol>
                </nav>
            </div>
        </div>
    )
}

