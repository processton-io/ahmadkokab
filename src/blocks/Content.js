import React from 'react';
import clsx from 'clsx';

import Container from '../components/UI/Container';
import Text from '../components/UI/Text';

export default function Content({ data }) {
return (
  <section className=' mt-5'>
    <Container>
      {data?.content && (
        <Text className={ 
          clsx({
            "mx-auto w-full max-w-6xl": true,
            "text-left": data.variant === 'left-hand',
            "text-right": data.variant === 'right-hand',
            "text-center": data.variant === "centered"
            })}>{data?.content}</Text>
      )}
      {data.columns && (
      <div className='flex flex-col md:flex-row mt-5 gap-5 max-w-6xl mx-auto'>
          { data.columns.map((col) => {
              return (
                <Text className={ 
                  clsx({
                    "mx-auto flex-1 max-w-6xl": true,
                    "text-left": data.variant === 'left-hand',
                    "text-right": data.variant === 'right-hand',
                    "text-center": data.variant === "centered"
                    })}>{col?.content}</Text>
              )
          })}
      </div>
      )}
    </Container>
  </section>
)
}
