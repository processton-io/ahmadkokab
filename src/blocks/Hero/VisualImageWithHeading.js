
import React from 'react'
import { Parallax } from 'react-parallax';
import Buttons from '../../components/UI/Buttons';
import Image from '../../resolvers/Image'
import clsx from 'clsx';

export default function VisualImageWithHeading({ data }) {
  
  const bgImage =  data?.bg_photo ? 
    (typeof data?.bg_photo?.bg_image === 'string' ? data?.bg_photo?.bg_image : data?.bg_photo?.bg_image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src)
   : (typeof data?.hero_bg_photo?.hero_bg_image === 'string' ? data?.hero_bg_photo?.hero_bg_image : data?.hero_bg_photo?.hero_bg_image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src);
    
    return (
        <Parallax
          bgImage={bgImage}
          bgImageAlt={ data?.bg_photo ? data?.bg_photo?.alt : data?.hero_bg_photo ? data?.hero_bg_photo?.alt : ''}
          disabled={ (data?.bg_photo && data?.bg_photo?.enable_parallax === true) || (data?.hero_bg_photo && data?.hero_bg_photo?.enable_parallax === true)}
        >
            <section className={clsx({'h-screen': data?.height === 'full' ,"bg-white bg-opacity-50 dark:bg-gray-900  items-center my-auto flex": true })}>
                <section className=" mx-auto">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            {data?.title && (<h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{data?.title}</h1>)}
                            {data?.content && (<p className=" mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{data?.content}</p>)}
                            {data?.buttons && (
                                <div className="inline-flex items-center justify-center">
                                    <Buttons
                                        buttons={data?.buttons}
                                        className={clsx('mt-6')}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-right align-right text-right">
                            { data?.photo && (<Image
                                src={data?.photo?.image}
                                alt={data?.photo?.alt}
                                className="w-full max-w-xs mx-auto"
                            />)}
                            { data?.hero_photo && (<Image
                                src={data?.hero_photo?.hero_image}
                                alt={data?.hero_photo?.alt}
                                className="w-full max-w-xs mx-auto"
                            />)} 
                        </div>                
                    </div>
                </section>
            </section>
        </Parallax>
    )

}