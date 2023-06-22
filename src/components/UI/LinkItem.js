import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import clsx from 'clsx'

export default function LinkItem({ className, button, children, ...props }) {
  let buttonStyle = 'block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white'
  switch (button?.variant) {
    case 'button':
      buttonStyle = `${buttonStyle}  `
      break
    case 'outlined':
      buttonStyle = `${buttonStyle}  `
      break
    default:
      buttonStyle = `${buttonStyle}  `
  }
  return (
    <>
        <GatsbyLink
          to={button?.url}
          className={clsx(buttonStyle, className)}
          {...props}
        >
          {button?.title}
        </GatsbyLink>
    </>
  )
}
