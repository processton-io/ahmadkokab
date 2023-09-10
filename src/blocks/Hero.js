import React from 'react'
import clsx from 'clsx';

import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"

import HeroGenerator from './Hero/HeroGenerator';

export default function Hero({ data,  height }) {
  const image = getImage(data.bg_settings?.bg_photo)
  const bgImage = convertToBgImage(image)
  data.height = height;
  switch (data.bg_settings.variant){
    case 'bg-video':
      data.height = 'full'
      return (
        <div className={ 
          clsx({
            "flex relative w-full h-screen": true
            })}>
          <div className={ 
            clsx({
              "video-background": true,
              })} >
            <iframe title={data.title} src={data.bg_settings.bg_video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
          </div>
          <div className={ 
          clsx({
            "absolute w-full h-full bg-opacity-20":true, 
            'bg-white' : data.bg_settings.overlay === 'white', 
            'bg-black' : data.bg_settings.overlay === 'dark'
            })} >
            <HeroGenerator data={data} />
          </div>
        </div>
      )
    case 'bg-image':
      return (
        <div className='bg-cover bg-no-repeat bg-center' style={ {backgroundImage: `url(`+bgImage?.fluid?.src+`)`}}>
          <div className={ clsx({ 'bg-opacity-20':true, 'bg-white' : data.bg_settings.overlay === 'white', 'bg-black' : data.bg_settings.overlay === 'dark' })}>
            <HeroGenerator data={data} />
          </div>
        </div>
        
      )
    case 'bg-color':
      return (
        <div style={{ backgroundColor: data.bg_settings.bg_color}}>
          <HeroGenerator data={data} />
        </div>
        
      )
    default:
      return (<HeroGenerator data={data} />)
  }
  
  
}
