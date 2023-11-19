import React from 'react';
import { Link as GatsbyLink } from 'gatsby'

import Title from '../../components/UI/Title';
import Text from '../../components/UI/Text';
import Image from '../../resolvers/Image'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Default({ data, preview = false }) {
  
  return (
          <div
            className={`mx-auto grid max-w-6xl grid-cols-1 gap-3 md:gap-6 md:grid-cols-2 lg:grid-cols-4 `}>
            {data?.columns &&
              data?.columns.map((col, i) => {
                if(col?.permalink){
                  return (<GatsbyLink to={col?.permalink} >
                    <Card i={i} col={col} preview={preview} />
                  </GatsbyLink>)
                }else{
                  return (<Card i={i} col={col} preview={preview} />)
                }
            })}
          </div>
  );
}


function Card({ i, col , preview = false }) {
  console.log(col?.photo?.image)
  return (
    <div className='flex flex-col border px-4 pb-4 bg-white text-black hover:bg-sky-300 space-y-4' key={i}>
      {col?.photo?.image != undefined && (
        <div className="text-center">
            <Image
              src={col?.photo?.image}
              alt={col?.photo?.alt}
              className="h-24 w-24 object-contain mt-4 rounded-sm inline-block"
            />
        </div>
      )}
      <div
        className={`mx-auto p-3 pt-0 md:p-0 md:w-72 text-center lg:w-full  ${
          i % 3 === 0
            ? 'lg:ml-0 lg:mr-auto'
            : i % 3 === 2
            ? 'lg:mr-0 lg:ml-auto'
            : 'lg:mx-auto'
        } ${i % 2 === 0 ? 'md:ml-0' : 'md:mr-0'}`}>
        {col?.title && (
          <Title Tag='h6' variant='xs' className='mb-4 short_description'>
            {col.title}
          </Title>
        )}
        {col?.content && (
          <>
            <Text className={`mt-1 short_description h-20 md:h-28 text-md`}>{col?.content}</Text>
            {col?.permalink && (<div className='text-center'>
              <GatsbyLink to={col?.permalink} className='text-sm'>read more ...</GatsbyLink>
            </div>)}
          </>
        )}
      </div>
    </div>
  );
}