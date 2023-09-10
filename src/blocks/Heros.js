
import React from 'react'

import Hero from '@/blocks/Hero';
import Carousel from 're-carousel' 
import clsx from 'clsx';
export default function Heros({ data }) {
  
  return (
    <div className={clsx({ 
            "h-screen": data.height === 'full', 
            "h-80vh": data.height === '80vh', 
            "h-60vh": data.height === '60vh', 
            "h-40vh": data.height === '40vh', 
            "h-20vh": data.height === '20vh', 
            "h-auto": data.height === 'auto'
            })} >
      
      {data?.heros && (
          data?.heros.length > 1 ? (
            <Carousel loop auto>
              {data?.heros?.map((block, i) => {
                return (
                  <Hero key={i} data={block.hero} height={data.height} />
                )
              })}
            </Carousel>
          ) : (
            <div>
              <Hero key={`0`} data={data?.heros[0].hero} height={data.height} />
            </div>
          )
      )}
    </div>
  )
}
