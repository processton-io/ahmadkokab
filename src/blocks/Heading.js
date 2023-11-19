import React from 'react';
import clsx from 'clsx';

import Container from '../components/UI/Container';
import Text from '../components/UI/Text';

export default function Heading({ data }) {
  console.log(data);
  return (
    
    <section className=' py-5' style={{ backgroundColor: data.bg_settings.bg_color}}>
      <Container>
        {data?.variant === 'h1' && (
          <h1 className={ 
            clsx({
              "mx-auto w-full max-w-6xl text-7xl font-bold leading-9": true,
              })}>{data?.title}</h1>
        )}
        {data?.variant === 'h2' && (
          <h2 className={ 
            clsx({
              "mx-auto w-full max-w-6xl text-6xl font-bold": true,
              })}>{data?.title}</h2>
        )}
        {data?.variant === 'h3' && (
          <h3 className={ 
            clsx({
              "mx-auto w-full max-w-6xl text-4xl font-bold": true,
              })}>{data?.title}</h3>
        )}
        {data?.variant === 'h4' && (
          <h4 className={ 
            clsx({
              "mx-auto w-full max-w-6xl text-3xl font-bold": true,
              })}>{data?.title}</h4>
        )}
        {data?.variant === 'h5' && (
          <h5 className={ 
            clsx({
              "mx-auto w-full max-w-6xl text-2xl font-bold": true,
              })}>{data?.title}</h5>
        )}
        {data?.variant === 'h6' && (
          <h6 className={ 
            clsx({
              "mx-auto w-full max-w-6xl text-xl font-bold": true,
              })}>{data?.title}</h6>
        )}
      </Container>
    </section>
  )
}
