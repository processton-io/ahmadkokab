import clsx from 'clsx'
import React, { useState } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import nav from '../settings/header.json'
import socialLinks from '../settings/social_links.json'
import Image from '../resolvers/Image'

import DarkmodeToggle from './DarkmodeToggle'

export default function Header() {
  const [openDropDown, setOpenDropDown ] = useState(false);

  const toggleDropDown = () => {
    setOpenDropDown(!openDropDown);
  }
  return (
      <header>
        {nav?.show_mini_bar === true && (
          <nav className="bg-headerSocialBg text-headerSocialTextDefaultColor border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow">
            <div className="flex flex-wrap space-y-2 xl:space-y-0 justify-between items-center mx-auto max-w-screen-xl">
              <div className='flex flex-col md:flex-row space-y-3 space-x-0 md:space-y-0 md:space-x-3 '>
                {nav?.show_contact_links && nav?.contact_links && (nav?.contact_links.map((link, i) => {
                  switch (link.platform) {
                    case "email":
                      return (
                        <a className='space-x-2 flex h-6 text-headerSocialTextDefaultColor hover:text-headerSocialTextHoverColor bg-headerSocialTextDefaultBG hover:bg-headerSocialTextHoverBG' href={`mailto:`+link.permalink} key={`social-menue-social-text`+i}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail mr-2 w-4 "><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                          {link.permalink}</a>
                      );
                    case "phone":
                      return (
                        <a className='space-x-2 flex h-6 text-headerSocialTextDefaultColor hover:text-headerSocialTextHoverColor bg-headerSocialTextDefaultBG hover:bg-headerSocialTextHoverBG' href={`tel:`+link.permalink} key={`social-menue-social-text`+i}>
                          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone mr-2 w-4 "><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                          {link.permalink}</a>
                      );
                    case "calendar":
                      return (
                        <a className='space-x-2 flex h-6 text-headerSocialTextDefaultColor hover:text-headerSocialTextHoverColor bg-headerSocialTextDefaultBG hover:bg-headerSocialTextHoverBG' href={link.permalink} key={`social-menue-social-text`+i}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar mr-2 w-4 "><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                          {link.permalink}</a>
                      );
                    default:
                      return <></>
                  }
                }))}
              </div>
              <div className='flex flex-row lg:flex-row-reverse'>
                {nav?.show_social_links && nav?.social_links && (nav?.social_links.map((link, i) => {
                    switch (link.platform) {
                      case "facebook":
                        return (
                          <a className='spce-y-2 lg:space-x-2 flex-0 h-6 sm:h-6 text-headerSocialTextDefaultColor hover:text-headerSocialTextHoverColor bg-headerSocialTextDefaultBG hover:bg-headerSocialTextHoverBG' href={link.permalink} key={`social-menue-social-icons`+i}>
                            <svg className='mr-2 w-6 h-6 lg:w-4 feather feather-facebook' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                          </a>
                        );
                      case "twitter":
                        return (
                          <a className='spce-y-2 lg:space-x-2 flex h-6 text-headerSocialTextDefaultColor hover:text-headerSocialTextHoverColor bg-headerSocialTextDefaultBG hover:bg-headerSocialTextHoverBG' href={link.permalink} key={`social-menue-social-icons`+i}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter mr-2 w-6 h-6 lg:w-4 "><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                          </a>
                        );
                      case "linkedin":
                        return (
                          <a className='spce-y-2 lg:space-x-2 flex h-6 text-headerSocialTextDefaultColor hover:text-headerSocialTextHoverColor bg-headerSocialTextDefaultBG hover:bg-headerSocialTextHoverBG' href={link.permalink} key={`social-menue-social-icons`+i}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin mr-2 w-6 h-6 lg:w-4 "><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                          </a>
                        );
                      case "youtube":
                        return (
                          <a className='spce-y-2 lg:space-x-2 flex h-6 text-headerSocialTextDefaultColor hover:text-headerSocialTextHoverColor bg-headerSocialTextDefaultBG hover:bg-headerSocialTextHoverBG' href={link.permalink} key={`social-menue-social-icons`+i}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-youtube mr-2 w-6 h-6 lg:w-4"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                          </a>
                        );
                      case "instagram":
                        return (
                          <a className='space-x-2 flex h-6 text-headerSocialTextDefaultColor hover:text-headerSocialTextHoverColor  bg-headerSocialTextDefaultBG hover:bg-headerSocialTextHoverBG' href={link.permalink} key={`social-menue-social-icons`+i}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram mr-2 w-6 h-6 lg:w-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                          </a>
                        );
                      default:
                        return <></>
                    }
                }))}
              </div>
            </div>
          </nav>
        )}
        <nav className="bg-header-bg bg-headerBg text-headerTextDefaultColor border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="/" className="flex items-center">
                    {nav?.photo?.image && (
                      <Image
                        src={nav?.photo?.image}
                        alt={nav?.photo?.alt}
                        className="mr-3 h-6 sm:h-9 rounded-full"
                      />
                    )}
                    <div className='flex flex-col'>
                    {nav?.title && (
                      <span
                        className={clsx('self-center text-xl font-bold whitespace-nowrap text-headerTitleColor dark:text-white', {
                          'mx-auto': nav?.isCentered,
                        })}
                      >
                        {nav?.title}
                      </span>
                    )}
                    {nav?.title && (
                      <span
                        className={clsx('text-xs font-semibold whitespace-nowrap text-headerSubTitleColor dark:text-white', {
                          'mx-auto': nav?.isCentered,
                        })}
                      >
                        {nav?.title}
                      </span>
                    )}
                    </div>
                </a>
                <div className="flex items-center lg:order-2 lg:hidden">
                    <button type="button" onClick={toggleDropDown} className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    <DarkmodeToggle className={"inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"}  />
                </div>
                <div className={clsx({
                        'hidden': !openDropDown,
                        },'justify-between items-center w-full lg:flex lg:w-auto lg:order-1')}>
                    <div className="flex flex-col mt-4 font-medium lg:flex-row lg:align-right lg:space-x-8 lg:mt-0">
                      {nav.nav && (
                        nav.nav.map((button , i) => {
                          return <GatsbyLink className={
                            clsx({
                              'block py-2 pr-4 pl-3 text-headerTextDefaultColor hover:text-headerTextHoverColor rounded lg:bg-transparent lg:text-headerTextDefaultColor lg:hover:text-headerTextHoverColor dark:text-white': (button.type === 'default'),
                              "text-headerTextDefaultColor hover:text-headerTextHoverColor bg-headerTextDefaultBG hover:bg-headerTextHoverBG focus:ring-4 focus:ring-headerTextHoverBG font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-headerTextDefaultBG dark:hover:bg-headerTextHoverBG focus:outline-none dark:focus:ring-headerTextHoverBG": button.type=== 'button'
                            })
                          }
                            key={`menue-link`+i}
                            to={button.permalink}
                          >
                            {button.name}
                          </GatsbyLink>
                        })
                        
                      )}
                    <DarkmodeToggle className="hidden md:block" />
                    </div>
                </div>
            </div>
        </nav>
      </header>
  )
}
