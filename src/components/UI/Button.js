import React from 'react'
import Link from '../../resolvers/Link'
import clsx from 'clsx'

export default function Button({ className, button, children, ...props }) {
  let buttonStyle = 'group inline-block font-bold text-dark-500 dark:text-white'
  switch (button?.variant) {
    case 'button':
      buttonStyle = `${buttonStyle} bg-primaryButtonDefaultBG hover:bg-primaryButtonHoverBG text-primaryButtonDefaultColor hover:text-primaryButtonHoverColor focus:ring-4 ring-primaryButtonHoverRing  hover:ring-primaryButtonDefaultRing focus:ring-primaryButtonDefaultRing font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-white dark:text-black dark:hover:bg-gray-500 focus:outline-none dark:focus:ring-white`
      break
    case 'secondary':
      buttonStyle = `${buttonStyle} bg-secondaryButtonDefaultBG hover:bg-secondaryButtonHoverBG text-secondaryButtonDefaultColor hover:text-secondaryButtonHoverColor focus:ring-4 ring-secondaryButtonHoverRing  hover:ring-secondaryButtonDefaultRing focus:ring-secondaryButtonDefaultRing font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-white dark:text-black dark:hover:bg-gray-500 focus:outline-none dark:focus:ring-white`
      break
    case 'outlined':
      buttonStyle = `${buttonStyle} border-dark-500 border dark:border-white py-2 px-6 text-center dark:hover:bg-white hover:bg-dark-500 hover:text-white dark:hover:text-black transition-colors`
      break
    default:
      buttonStyle = `${buttonStyle} link dark:link-dark`
  }

  return (
    <>
      {button?.url ? (
        <Link
          to={button?.url}
          className={clsx(buttonStyle, className)}
          {...props}
        >
          {children}
        </Link>
      ) : (
        <button className={clsx(buttonStyle, className)} {...props}>
          {children}
        </button>
      )}
    </>
  )
}
