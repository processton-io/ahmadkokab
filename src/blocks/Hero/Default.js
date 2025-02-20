
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
            "h-auto": data.height === 'auto'
            })} style={{"height": "calc(100vh - 7rem)"}}>
            <div className="mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center w-full space-x-0 md:space-x-4">
                <div className="w-full md:w-2/3 flex flex-col md:items-center mb-16 md:mb-0 items-center text-center md:text-right space-y-6 md:space-y-0">
                    {data?.title && (<h1 className={clsx({"title-font text-4xl md:text-6xl font-medium  text-black dark:text-white" : true })}>{data?.title}</h1>)}
                    {data?.content && (<Text className={clsx({"leading-relaxed prose dark:prose-invert" : true })}>{data?.content}</Text>)}
                    {data?.buttons && (
                        <div className="flex justify-end">
                            <Buttons
                                buttons={data?.buttons}
                            />
                        </div>
                    )}
                </div>
                { data?.photo && (
                    <div className="w-full md:w-1/3 pb-8 md:pb-0 text-center md:text-left">
                        { data?.photo && (<Image
                                src={data?.photo?.image}
                                alt={data?.photo?.alt}
                                objectFit='contain'
                                className="w-44 object-contain rounded-full"
                            />)}
                    </div>
                )}
            </div>
        </section>
        
    )

}