import React from 'react';
import { useSkillRelatedTips } from '../../hooks/useSkillRelatedTips';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import Title from '../UI/Title';
import { Link as GatsbyLink } from 'gatsby'
/**
 * Component
 */
export default function SkillRelated({ id, ...props }) {
  
  const projects = useSkillRelatedTips();
  const filteredProjects = projects.filter(({ node }) => node.frontmatter.skills.includes(id));

  return (
    <>
    {filteredProjects.length > 0 && <div className="mx-auto container max-w-screen-xl lg:mt-12 mt-8">
      <div className="mx-auto max-w-screen-xl">
          <h3 className='text-2xl md:text-2xl font-bold text-gray-900 dark:text-white'>Code tips</h3>
      </div>
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-3 md:gap-6 md:grid-cols-2 lg:grid-cols-5 my-8">
        {filteredProjects.map(({ node }) => {
                const title = node.frontmatter.title || node.frontmatter.permalink
                const image = getImage(node.frontmatter.photo?.image)
                
                return <GatsbyLink to={node.frontmatter.permalink} key={node.frontmatter.permalink} className="
                flex flex-col border rounded rounded-md
                text-black dark:text-white dark:hover:text-white dark:active:text-white
                bg-white hover:bg-headerSocialBg hover:bg-opacity-70 active:bg-headerSocialBg dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-600
                ">
                    {image && <div className="text-center h-36">
                        <BgImage image={image} className='bg-cover h-36 w-full object-contain rounded-sm inline-block'></BgImage>
                    </div>}
                    <div className="text-center my-4">
                        <Title Tag='h6' variant='xs' className='short_description '>
                            {title}
                        </Title>
                    </div> 
                </GatsbyLink>
        })}
    </div>
    </div>}</>
  );
};