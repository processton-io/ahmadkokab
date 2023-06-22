import React from 'react';
import Image from '../../resolvers/Image'

export default function Galley({ data }) {
  
  
  const images = [[], [], [], []];

  if(data.columns && data?.columns.length > 0){
    for (let i = 0; i < data.columns.length; i++) {
      const index = i % 4;
      images[index].push(data.columns[i]);
    }
  }
  console.log(images)
  return (
          <>
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-4`}>
              {
                data?.columns && (
                  <>
                  <div class="grid gap-4">
                    {images[0].map((col, i) => (
                      col?.photo?.image && (
                        <Image
                            src={col?.photo?.image}
                            alt={col?.photo?.alt}
                            className="h-auto max-w-full rounded-lg"
                            key={i+`0`}
                        />
                      )))}
                  </div>
                  <div class="grid gap-4">
                    {images[1].map((col, i) => (
                      col?.photo?.image && (
                        <Image
                            src={col?.photo?.image}
                            alt={col?.photo?.alt}
                            className="h-auto max-w-full rounded-lg"
                            key={i+`1`} 
                        />
                      )))}
                  </div>
                  <div class="grid gap-4">
                    {images[2].map((col, i) => (
                      col?.photo?.image && (
                        <Image
                            src={col?.photo?.image}
                            alt={col?.photo?.alt}
                            className="h-auto max-w-full rounded-lg"
                            key={i+`2`} 
                        />
                      )))}
                  </div>
                  <div class="grid gap-4">
                    {images[3].map((col, i) => (
                      col?.photo?.image && (
                        <Image
                            src={col?.photo?.image}
                            alt={col?.photo?.alt}
                            className="h-auto max-w-full rounded-lg"
                            key={i+`4`} 
                        />
                      )))}
                  </div>
                  </>
                )
              }
            </div>
          </>
  );
}
