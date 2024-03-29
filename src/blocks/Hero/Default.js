
import React from 'react'
import Buttons from '../../components/UI/Buttons';
import Text from '../../components/UI/Text';
import Image from '../../resolvers/Image'
import clsx from 'clsx';

export default function DefaultHero({ data }) {
  
    return (
        <section  className={ 
          clsx({
            "body-font flex place-content-center items-center ": true, 
            "min-h-screen": data.height === 'full', 
            "min-h-80vh": data.height === '80vh', 
            "min-h-60vh": data.height === '60vh', 
            "min-h-40vh": data.height === '40vh', 
            "min-h-20vh": data.height === '20vh', 
            "h-auto": data.height === 'auto'
            })}>
            <div className="mx-auto flex px-5 py-24 flex-col items-center w-full">
                <div className="w-full  flex flex-col md:items-center mb-16 md:mb-0 items-center text-center">
                    {data?.title && (<h1 className={clsx({"title-font sm:text-4xl text-3xl mb-4 font-medium  text-black dark:text-white" : true })}>{data?.title}</h1>)}
                    {data?.content && (<Text className={clsx({"mb-8 leading-relaxed prose dark:prose-invert" : true })}>{data?.content}</Text>)}
                    {data?.buttons && (
                        <div className="flex justify-center">
                            <Buttons
                                buttons={data?.buttons}
                                className={clsx('mt-6')}
                            />
                        </div>
                    )}
                </div>
                { data?.photo && (
                    <div className="lg:max-w-lg w-full  text-center">
                        { data?.photo && (<Image
                                src={data?.photo?.image}
                                alt={data?.photo?.alt}
                                objectFit='contain'
                                className="w-full max-w-xs mx-auto object-contain"
                            />)}
                    </div>
                )}
            </div>
        </section>
        
    )

}