import React from 'react';
import { Link as GatsbyLink } from 'gatsby'

import Title from '../../components/UI/Title';
import Text from '../../components/UI/Text';
import Image from '../../resolvers/Image'

export default function PerkCards({ data }) {
  
  return (
          <div
            className={`mx-auto grid max-w-6xl grid-cols-1 gap-x-4 gap-y-6 md:gap-10 lg:grid-cols-3 `}>
            {data?.columns &&
              data?.columns.map((col, i) => (
                
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"  key={i}>
                    <a href="#">
                        
                        {col?.photo?.image && (
                          <div className="">
                              <Image
                                src={col?.photo?.image}
                                alt={col?.photo?.alt}
                                className="rounded-t-lg"
                              />
                          </div>
                        )}
                    </a>
                    <div className="p-5">
                        {col?.title && (
                          <Title Tag='h3' variant='xs' className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                            {col.title}
                          </Title>
                        )}
                        <Text className={`mb-3 font-normal text-gray-700 dark:text-gray-400`}>{col?.content}</Text>
                        {col?.permalink && (<div className='text-right'>
                          <GatsbyLink to={col?.permalink} className='text-sm'>read more ...</GatsbyLink>
                        </div>)}
                    </div>
                </div>
              ))}
          </div>
  );
}
