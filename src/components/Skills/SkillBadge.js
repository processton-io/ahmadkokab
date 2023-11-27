import React from 'react'
import clsx from 'clsx'
import Link from '../../resolvers/Link'
import Image from '../../resolvers/Image'

export default function SkillBadge({ className, data }) {
  return (
    <div className={clsx('inline-block ring-2 ring-black rounded-full', className)}>
        <Link to={data.frontmatter.permalink} className={'border border-grey-800  rounded-full flex w-full flex-row space-x-2 pr-4'}>
            <Image className={'h-8 w-8 inline rounded-full border border-black'} src={data.frontmatter.photo.image} />
            <span className='text-lg font-bold h-8'>{data.frontmatter.title}</span>
        </Link>
    </div>
  )
}
