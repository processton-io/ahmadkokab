import React from 'react';

import { Parallax } from 'react-parallax';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';
import Text from '../components/UI/Text';
import DefaultPerk from './Perks/Default'
import PerkCards from './Perks/PerkCards'
import Galley from './Perks/Galley'

function PerkItems({ data }) {
  switch (data.variant){
    case 'cards':
      return (
          <PerkCards data={data} />
      )
    case 'gallery':
      return (
          <Galley data={data} />
      )
    default:
      return (
          <DefaultPerk data={data} />
      )
  }
}

export default function Perks({ data }) {
  
  const bgImage = typeof data?.bg_photo?.bg_image === 'string' ? data?.bg_photo?.bg_image : data?.bg_photo?.bg_image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
  return (
    <Parallax
        bgImage={bgImage}
        bgImageAlt={data?.bg_photo?.alt}
        disabled={data?.bg_photo?.enable_parallax === true}
    >
      <section className='py-10 bg-white bg-opacity-50 dark:bg-[#0d0d10] lg:py-20 '>
        
        <Container>
          {data?.title && (
            <Title
              Tag='h2'
              variant='xl'
              className={`mx-auto mb-4 max-w-6xl lg:mb-10 text-perkTitle`}>
              {data?.title}
            </Title>
          )}
          {data?.content && (
            <Text className={`mx-auto mt-8 max-w-6xl lg:text-lg  text-perkSubTitle`}>
              {data?.content}
            </Text>
          )}
          <PerkItems data={data} />
        </Container>
      </section>
    </Parallax>
  );
}
