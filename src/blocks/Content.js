import React from 'react';
import Container from '../components/UI/Container';
import Text from '../components/UI/Text';
import { Parallax } from 'react-parallax';

export default function Content({ data }) {
  const bgImage = typeof data?.bg_photo?.bg_image === 'string' ? data?.bg_photo?.bg_image : data?.bg_photo?.bg_image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
  return (
    <Parallax
        bgImage={bgImage}
        bgImageAlt={data?.bg_photo?.alt}
        disabled={data?.bg_photo?.enable_parallax === true}
    >
      <section className='py-10 lg:py-16 bg-white bg-opacity-50'>
        <Container>
          {data?.content && (
            <Text className='mx-auto w-full max-w-6xl'>{data?.content}</Text>
          )}
        </Container>
      </section>
    </Parallax>
  );
}
