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
        ol: ({ node, ...props }) => (
          <ol className={'list-decimal pl-6 my-1 '+  className}>
            {props.children}
          </ol>
        ),
        ul: ({ node, ...props }) => (
          <ul className={'list-disc pl-6 my-1 '+  className}>
            {props.children}
          </ul>
        ),
        li: ({ node, ...props }) => (
          <li className={'dark:text-white '+  className}>
            {props.children}
          </li>
        ),
        h1: ({ node, ...props }) => (
          <h1 className={'text-3xl dark:text-white mb-4 '+  className}>
            {props.children}
          </h1>
        ),
        h2: ({ node, ...props }) => (
          <h2 className={'text-2xl dark:text-white mb-4 '+  className}>
            {props.children}
          </h2>
        ),
        h3: ({ node, ...props }) => (
          <h3 className={'text-xl dark:text-white mb-3 '+  className}>
            {props.children}
          </h3>
        ),
        h4: ({ node, ...props }) => (
          <h4 className={'text-xl dark:text-white font-bolder mb-2 '+  className}>
            {props.children}
          </h4>
        ),
        h5: ({ node, ...props }) => (
          <h5 className={'text-xl dark:text-white font-bold mb-1 '+  className}>
            {props.children}
          </h5>
        ),
        h6: ({ node, ...props }) => (
          <h6 className={'text-xl dark:text-white '+  className}>
            {props.children}
          </h6>
        ),
        p: ({ node, ...props }) => (
          <p className={'prose dark:text-white dark:prose-invert mb-1 '+  className}>
            {props.children}
          </p>
        ),
        hr: ({ node, ...props }) => (
          <hr className='my-6' />
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
