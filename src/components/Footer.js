import React from 'react';
import footer from '../settings/footer.json'
import clsx from 'clsx'
import { Link as GatsbyLink } from 'gatsby'
import Image from '../resolvers/Image'
import socialLinks from '../settings/social_links.json'

export default function Footer() {

  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
          {footer?.photo?.image && (
            <GatsbyLink to="/" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
              <Image
                src={footer?.photo?.image}
                alt={footer?.photo?.alt}
                className="mr-3 h-6 sm:h-9 rounded-full"
              />
              {footer?.title && ( <p className="my-6 text-gray-500 dark:text-gray-400">{footer?.title}</p>)}
            </GatsbyLink>
          )}
          {footer?.content && ( <p className="my-6 text-gray-500 dark:text-gray-400">{footer?.content}</p>)}
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            {footer.nav && (
              footer.nav.map((button , i) => {
                return <li
                    key={i}>
                  <GatsbyLink className={
                    clsx({
                      'mr-4 hover:underline md:mr-6': (button.type === 'default'),
                      "mr-4 hover:underline md:mr-6 text-gray-500 bg-footerTextDefaultBG hover:bg-footerTextHoverBG focus:ring-4 focus:ring-footerTextHoverBG font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-footerTextDefaultBG dark:hover:bg-footerTextHoverBG focus:outline-none dark:focus:ring-footerTextHoverBG": button.type=== 'button'
                    })
                  }
                    to={button.permalink}
                  >
                    {button.name}
                  </GatsbyLink>
                </li>
              })
            )}
          </ul>
          <ul className="flex justify-center mt-5 space-x-5">
            {socialLinks?.social_links && (socialLinks?.social_links.map((link, i) => {
                  if(link.show_in_footer === true){
                    switch (link.platform) {
                      case "facebook":
                        return (
                          <li><a className='spce-y-2 lg:space-x-2 flex-0 h-6 text-footerSocialTextDefaultColor hover:text-footerSocialTextHoverColor bg-footerSocialTextDefaultBG hover:bg-footerSocialTextHoverBG' href={link.permalink} key={i}>
                            <svg className='mr-2 w-6 h-6 lg:w-4 feather feather-facebook' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                          </a></li>
                        );
                      case "twitter":
                        return (
                          <li><a className='spce-y-2 lg:space-x-2 flex h-6 text-footerSocialTextDefaultColor hover:text-footerSocialTextHoverColor bg-footerSocialTextDefaultBG hover:bg-footerSocialTextHoverBG' href={link.permalink} key={i}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter mr-2 w-6 h-6 lg:w-4 "><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                          </a></li>
                        );
                      case "linkedin":
                        return (
                          <li><a className='spce-y-2 lg:space-x-2 flex h-6 text-footerSocialTextDefaultColor hover:text-footerSocialTextHoverColor bg-footerSocialTextDefaultBG hover:bg-footerSocialTextHoverBG' href={link.permalink} key={i}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin mr-2 w-6 h-6 lg:w-4 "><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                          </a></li>
                        );
                      case "youtube":
                        return (
                          <li><a className='spce-y-2 lg:space-x-2 flex h-6 text-footerSocialTextDefaultColor hover:text-footerSocialTextHoverColor bg-footerSocialTextDefaultBG hover:bg-footerSocialTextHoverBG' href={link.permalink} key={i}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-youtube mr-2 w-6 h-6 lg:w-4"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                          </a></li>
                        );
                      case "instagram":
                        return (
                          <li><a className='space-x-2 flex h-6 text-footerSocialTextDefaultColor hover:text-footerSocialTextHoverColor  bg-footerSocialTextDefaultBG hover:bg-footerSocialTextHoverBG' href={link.permalink} key={i}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram mr-2 w-6 h-6 lg:w-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                          </a></li>
                        );
                      default:
                        return <></>
                    }
                  }else{
                    return <></>
                  }
                }))}
              
          </ul>
          {footer.copyright && (<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; {footer.copyright} <a href="/" className="hover:underline">Edge Base</a>. All Rights Reserved.</span>)}
      </div>
    </footer>
  );
}
