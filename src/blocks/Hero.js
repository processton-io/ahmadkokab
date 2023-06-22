import clsx from 'clsx'
import React from 'react'
import { Parallax } from 'react-parallax';
import Buttons from '../components/UI/Buttons'
import Container from '../components/UI/Container'
import Text from '../components/UI/Text'
import Image from '../resolvers/Image'
import DefaultHero from './Hero/Default';
import VisualImageWithHeading from './Hero/VisualImageWithHeading';

export default function Hero({ data }) {
  const isCentered = data?.variant === 'centered'
  const isFull = data?.height === 'full'
  
  const bgImage =  data?.bg_photo ? 
    (typeof data?.bg_photo?.bg_image === 'string' ? data?.bg_photo?.bg_image : data?.bg_photo?.bg_image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src)
   : (typeof data?.hero_bg_photo?.hero_bg_image === 'string' ? data?.hero_bg_photo?.hero_bg_image : data?.hero_bg_photo?.hero_bg_image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src);
  switch (data.variant) {
    case 'full':
      return (
        <DefaultHero data={data} />
      )
    case 'visual_image_with_heading':
      return <VisualImageWithHeading data={data} />;
    default:
      return (
        <div className='transition-all duration-1000'>

          <Parallax
              bgImage={bgImage}
              bgImageAlt={ data?.bg_photo ? data?.bg_photo?.alt : data?.hero_bg_photo ? data?.hero_bg_photo?.alt : ''}
              disabled={ (data?.bg_photo && data?.bg_photo?.enable_parallax === true) || (data?.hero_bg_photo && data?.hero_bg_photo?.enable_parallax === true)}
          >
          <section
            className={clsx(
              'py-12 bg-white bg-opacity-50 dark:bg-black dark:text-white lg:py-24 relative min-h-72',
              {
                'flex min-h-screen items-center ': isFull,
              },
              {
                'flex justify-center py-20 text-center lg:py-44': isCentered,
              },
            )}
          >
            <div className='container mx-auto max-w-screen-xl flex'>
              <Container className={`lg:w-2/3`}>
                {data?.title && (
                  <h1
                    className={clsx('mb-4 text-4xl font-bold md:text-6xl', {
                      'mx-auto': isCentered,
                    })}
                  >
                    {data?.title}
                  </h1>
                )}
                <Text className={clsx('text-lg', { 'mx-auto': isCentered })}>
                  {data?.content}
                </Text>
                {data?.buttons && (
                  <Buttons
                    buttons={data?.buttons}
                    className={clsx('mt-6', { 'justify-center': isCentered })}
                  />
                )}
              </Container>
              {data?.photo && data?.photo?.image ? (
                <div className="lg:w-1/3 text-center">
                    <Image
                      src={data?.photo?.image}
                      alt={data?.photo?.alt}
                      className="w-72 rounded-md"
                    />
                </div>
              ) : data?.hero_photo && data?.hero_photo?.hero_image && (
                <div className="lg:w-1/3 text-center">
                    <Image
                      src={data?.hero_photo?.hero_image}
                      alt={data?.hero_photo?.alt}
                      className="w-72 rounded-md"
                    />
                </div>
              )}
            </div>
          </section>
          </Parallax>
        </div>
      )
  }
  

  
}
