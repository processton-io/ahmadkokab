import clsx from 'clsx'
import React from 'react'

import Hero from '@/blocks/Hero';
import Carousel from 're-carousel' 
export default function Heros({ data }) {
  
  return (
    <div className={clsx({'h-screen': data?.height === 'full' })}>
      {data?.heros && (
          data?.heros.length > 1 ? (
            <Carousel loop auto>
              {data?.heros?.map((block, i) => {
                block.hero.height = data?.height
                return (
                  <Hero key={i} data={block.hero} />
                )
              })}
            </Carousel>
          ) : (
            <Hero key={`0`} data={data?.heros[0].hero} />
          )
      )}
    </div>
  )

  // return (
  //   <>
  //     <Carousel auto className=''>
        // {data?.heros && (
        //   data?.heros?.map((block, i) => {
        //     block.hero.variant = 'full'
        //       return (
        //         <Hero key={i} data={block.hero} />
        //       )
        //   })
        // )}
  //     </Carousel>
  //   </>
  // )
}
