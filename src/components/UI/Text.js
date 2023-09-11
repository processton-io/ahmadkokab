import clsx from 'clsx'
import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function Text({ children, className, ...props }) {

  const generateLinkTarget = (link) => {
    // console.log(generateLinkTarget)
    return link.startsWith(process.env.GATSBY_WEB_URL) || link.startsWith("/") ? "_self" : "_blank"
  }
  return (
    <ReactMarkdown
      components={{
        a: ({ node, ...props }) => (
          <a href={props.href} target={generateLinkTarget(props.href)} rel="noreferrer">
            {props.children}
          </a>
        ),
        h1: ({ node, ...props }) => (
          <h1 className={'text-6xl '+  props.className}>
            {props.children}
          </h1>
        ),
        h2: ({ node, ...props }) => (
          <h2 className={'text-5xl mb-4'+  props.className}>
            {props.children}
          </h2>
        ),
        h3: ({ node, ...props }) => (
          <h3 className={'text-4xl mb-3 '+  props.className}>
            {props.children}
          </h3>
        ),
        h4: ({ node, ...props }) => (
          <h4 className={'text-3xl mb-2 '+  props.className}>
            {props.children}
          </h4>
        ),
        h5: ({ node, ...props }) => (
          <h5 className={'text-2xl mb-1 '+  props.className}>
            {props.children}
          </h5>
        ),
        h6: ({ node, ...props }) => (
          <h6 className={'text-xl '+  props.className}>
            {props.children}
          </h6>
        ),
      }}
      className={clsx('prose dark:prose-invert ', className)}
      {...props}
    >
      {children}
    </ReactMarkdown>
  )
}
