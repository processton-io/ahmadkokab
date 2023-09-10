import clsx from 'clsx'
import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function Text({ children, className, ...props }) {

  const generateLinkTarget = (link) => {
    console.log(generateLinkTarget)
    return link.startsWith(process.env.GATSBY_APP_URL) ? "_self" : "_blank"
  }
  return (
    <ReactMarkdown
      components={{
        a: ({ node, ...props }) => (
          <a href={props.href} target={generateLinkTarget(props.href)} rel="noreferrer">
            {props.children}
          </a>
        ),
      }}
      className={clsx('prose dark:prose-invert ', className)}
      {...props}
    >
      {children}
    </ReactMarkdown>
  )
}
