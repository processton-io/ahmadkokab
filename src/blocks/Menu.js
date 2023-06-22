import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import Image from '../resolvers/Image'

export default function Menu({ data }) {
  const isCentered = data?.variant === 'centered'
  const [openDropDown, setOpenDropDown ] = useState(false);

  const toggleDropDown = () => {
    setOpenDropDown(!openDropDown);
  }

  return (
    <header>
      {data?.social_links && (
        <nav className="bg-header-bg bg-headerBg text-headerTextDefaultColor border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div>
              {data?.social_links && (data?.social_links.map((l) => {
                let link = l.social_link
                switch (link.social_plateform) {
                  case "email":
                    return (
                      <a className='space-x-2 flex' href={`mailto:`+link.url}>
                        <svg className='mr-2 w-4 feather feather-at-sign' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/></svg>
                        {link.url}</a>
                    );
                  default:
                    return (
                      <></>
                    );
                }
              }))}
            </div>
            <div>
              {data?.social_links && (data?.social_links.map((l) => {
                let link = l.social_link
                switch (link.social_plateform) {
                  case "facebook":
                    return (
                      <a className='space-x-2 flex' href={link.url}>
                        <svg className='mr-2 w-4 feather feather-facebook' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                      </a>
                    );
                  default:
                    return (
                      <></>
                    );
                }
              }))}
            </div>
          </div>
        </nav>
      )}
      <nav className="bg-header-bg bg-headerBg text-headerTextDefaultColor border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
              <a href="/" className="flex items-center">
                  {data?.photo?.image && (
                    <Image
                      src={data?.photo?.image}
                      alt={data?.photo?.alt}
                      className="mr-3 h-6 sm:h-9"
                    />
                  )}
                  {data?.title && (
                    <span
                      className={clsx('self-center text-xl font-semibold whitespace-nowrap dark:text-white', {
                        'mx-auto': isCentered,
                      })}
                    >
                      {data?.title}
                    </span>
                  )}
              </a>
              <div className="flex items-center lg:order-2 lg:hidden">
                  <button onClick={toggleDropDown} type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                      <span className="sr-only">Open main menu</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                      <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
              </div>
              <div className={clsx({
                        'hidden': !openDropDown,
                      },'justify-between items-center w-full lg:flex lg:w-auto lg:order-1')}>
                  <div className="flex flex-col mt-4 font-medium lg:flex-row lg:align-right lg:space-x-8 lg:mt-0">
                    {data?.buttons && (
                      data?.buttons.map((butt) => {
                        var button = butt.button;
                        return <GatsbyLink className={
                          clsx({
                            'block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-headerTextDefaultColor lg:hover:text-headerTextHoverColor dark:text-white': (button.variant === 'default'),
                            "text-white bg-headerTextDefaultBG hover:bg-headerTextHoverBG focus:ring-4 focus:ring-headerTextHoverBG font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-headerTextDefaultBG dark:hover:bg-headerTextHoverBG focus:outline-none dark:focus:ring-headerTextHoverBG": button.variant=== 'button'
                          })
                        }
                          to={button.url}
                        >
                          {button.content}
                        </GatsbyLink>
                      })
                      
                    )}
                  </div>
              </div>
          </div>
      </nav>
    </header>
  )
}
