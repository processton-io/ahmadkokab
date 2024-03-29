import clsx from 'clsx'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { CodeBlock, dracula } from 'react-code-blocks';

export default function Text({ children, className, ...props }) {

  const generateLinkTarget = (link) => {
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
          <h1 className={'text-6xl '+  className}>
            {props.children}
          </h1>
        ),
        h2: ({ node, ...props }) => (
          <h2 className={'text-5xl mb-4'+  className}>
            {props.children}
          </h2>
        ),
        h3: ({ node, ...props }) => (
          <h3 className={'text-4xl mb-3 '+  className}>
            {props.children}
          </h3>
        ),
        h4: ({ node, ...props }) => (
          <h4 className={'text-3xl mb-2 '+  className}>
            {props.children}
          </h4>
        ),
        h5: ({ node, ...props }) => (
          <h5 className={'text-2xl mb-1 '+  className}>
            {props.children}
          </h5>
        ),
        h6: ({ node, ...props }) => (
          <h6 className={'text-xl '+  className}>
            {props.children}
          </h6>
        ),
        p: ({ node, ...props }) => (
          <p className={'prose dark:prose-invert '+  className}>
            {props.children}
          </p>
        ),
        code: ({ node, ...props }) => {
          const language = className ? className.split('-') : '';
          return (
          <CodeBlock
            text={props.children[0]}
            language={language[1]}
            showLineNumbers={true}
            theme={dracula} />
        )}

      }}
      className={clsx(' ', className)}
      {...props}
    >
      {children}
    </ReactMarkdown>
  )
}
