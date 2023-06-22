import React from 'react';
import { Link as GatsbyLink } from 'gatsby'

import Title from '../../components/UI/Title';
import Text from '../../components/UI/Text';
import Image from '../../resolvers/Image'

export default function Default({ data }) {
  
  return (
          <div
            className={`mx-auto grid max-w-6xl grid-cols-1 gap-x-4 gap-y-6 md:gap-10 lg:grid-cols-3 `}>
            {data?.columns &&
              data?.columns.map((col, i) => (
                <div className='flex space-x-4' key={i}>
                  {col?.photo?.image && (
                    <div className="">
                        <Image
                          src={col?.photo?.image}
                          alt={col?.photo?.alt}
                          className="w-24 mt-4 rounded-full"
                        />
                    </div>
                  )}
                  <div
                    className={`mx-auto w-72 text-left sm:text-left lg:w-full  ${
                      i % 3 === 0
                        ? 'lg:ml-0 lg:mr-auto'
                        : i % 3 === 2
                        ? 'lg:mr-0 lg:ml-auto'
                        : 'lg:mx-auto'
                    } ${i % 2 === 0 ? 'md:ml-0' : 'md:mr-0'}`}>
                    {col?.title && (
                      <Title Tag='h3' variant='xs' className='mt-2'>
                        {col.title}
                      </Title>
                    )}
                    {col?.content && (
                      <>
                        <Text className={`mt-1 short_description h-8 text-xs`}>{col?.content}</Text>
                        <div className='text-right'>
                          <GatsbyLink to={col?.permalink} className='text-sm'>read more ...</GatsbyLink>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
          </div>
  );
}
