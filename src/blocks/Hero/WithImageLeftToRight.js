
import React from 'react'
import Buttons from '../../components/UI/Buttons';
import Image from '../../resolvers/Image'
import Text from '../../components/UI/Text';
import clsx from 'clsx';
import HeroForm from './HeroForm';

export default function WithImageLeftToRight({ data }) {
    return (
        <section className={ 
          clsx({
            "body-font flex place-content-center items-center ": true,
            "min-h-screen": data.height === 'full', 
            "h-auto md:min-h-80vh": data.height === '80vh', 
            "h-auto md:min-h-60vh": data.height === '60vh', 
            "h-auto md:min-h-40vh": data.height === '40vh', 
            "h-auto md:min-h-20vh": data.height === '20vh', 
            "h-auto": data.height === 'auto'
            })}>
            <div className="mx-auto flex px-5 py-24 md:flex-row flex-col items-center space-y-5">
                <div className={ 
                    clsx({
                        "flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ": true, 
                        "w-full md:w-1/12": data.ratio === '1/11',
                        "w-full md:w-2/12": data.ratio === '2/10',
                        "w-full md:w-3/12": data.ratio === '3/9',
                        "w-full md:w-4/12": data.ratio === '4/8',
                        "w-full md:w-5/12": data.ratio === '5/7',
                        "w-full md:w-6/12": data.ratio === '6/6',
                        "w-full md:w-7/12": data.ratio === '7/5',
                        "w-full md:w-8/12": data.ratio === '8/4',
                        "w-full md:w-9/12": data.ratio === '9/3',
                        "w-full md:w-10/12": data.ratio === '10/2',
                        "w-full md:w-11/12": data.ratio === '11/1',
                    })}>
                    {data?.title && (<h1 className={clsx({"title-font sm:text-4xl text-3xl mb-4 font-medium " : true , 'text-white': data.color_theme === 'white' , 'text-gray-900': data.color_theme === 'dark'})}>{data?.title}</h1>)}
                    {data?.content && (<Text className={clsx({"mb-8 leading-relaxed" : true , 'text-white': data.color_theme === 'white' , 'text-gray-500': data.color_theme === 'dark'})}>{data?.content}</Text>)}
                    {data?.form && (<HeroForm block={data} />)}
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
                    <div className={ 
                    clsx({
                        "lg:max-w-lg text-center md:text-left": true, 
                        "w-full md:w-11/12": data.ratio === '1/11',
                        "w-full md:w-10/12": data.ratio === '2/10',
                        "w-full md:w-9/12": data.ratio === '3/9',
                        "w-full md:w-8/12": data.ratio === '4/8',
                        "w-full md:w-7/12": data.ratio === '5/7',
                        "w-full md:w-6/12": data.ratio === '6/6',
                        "w-full md:w-5/12": data.ratio === '7/5',
                        "w-full md:w-4/12": data.ratio === '8/4',
                        "w-full md:w-3/12": data.ratio === '9/3',
                        "w-full md:w-2/12": data.ratio === '10/2',
                        "w-full md:w-1/12": data.ratio === '11/1',
                    })}>
                        { data?.photo && (<Image
                                src={data?.photo?.image}
                                alt={data?.photo?.alt}
                                objectFit='contain'
                                className="w-full max-w-xs mx-auto object-contain rounded-md"
                            />)}
                    </div>
                )}
            </div>
        </section>
    )

}