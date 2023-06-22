import React, { useState } from 'react'
import { Parallax } from 'react-parallax';
import  { useForms }  from '@/hooks/use-forms';

export default function Form({ block }) {
  
  const [errorMessage, setErrorMessage ] = useState("")
  const [successMessage, setSuccessMessage ] = useState("")

  const forms = useForms(block.form);
  const form = forms.length > 0 ? forms[0] : {

  };
  const blocks = form.rows;

  const convertToSafeInputFieldName = (str) => {
    // Replace any non-alphanumeric characters with underscores
    const safeStr = str.replace(/[^a-zA-Z0-9]/g, '_');

    // Remove leading digits if the string starts with a number
    const safeStrWithoutLeadingDigits = safeStr.replace(/^\d+/, '');

    // Add a prefix if the string starts with an underscore or a digit
    const finalStr = /^[0-9_]/.test(safeStrWithoutLeadingDigits) ? `_${safeStrWithoutLeadingDigits}` : safeStrWithoutLeadingDigits;

    // Convert the string to lowercase
    const lowercaseStr = finalStr.toLowerCase();

    return lowercaseStr;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setSuccessMessage(form.settings.success_msg ? form.settings.success_msg : "Your request is submitted")
      })
      .catch((error) => {
        setErrorMessage(error?.message)
      });
    
  };


  const bgImage =  block?.bg_photo ? 
    block?.bg_photo?.bg_image : block?.bg_photo?.bg_image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src
  return (
    <div className='transition-all duration-1000'>

      <Parallax
          bgImage={bgImage}
          bgImageAlt={ block?.bg_photo ? block?.bg_photo?.alt : block?.hero_bg_photo ? block?.hero_bg_photo?.alt : ''}
          disabled={ (block?.bg_photo && block?.bg_photo?.enable_parallax === true) || (block?.hero_bg_photo && block?.hero_bg_photo?.enable_parallax === true)}
      >
        <div className='container mx-auto lg:max-w-2xl py-16 px-6'>
          <h1 className='dark:text-white font-semibold text-3xl md:text-4xl mb-6'>{block.title}</h1>
          <form name={convertToSafeInputFieldName(block.title)} method="POST" data-netlify="true" onSubmit={handleSubmit}>
            <>
              {blocks && blocks.map(((blockElement, i) => {
                return blockElement.fields.map((field, x) => {
                  if(field.input_type === 'hidden'){
                    return <input type={field.input_type} id={i+`-`+x} key={`form-hidden`+i+`-`+x} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={field.label} required={field.required} name={convertToSafeInputFieldName(field.name)} />
                  }else{
                    return <></>
                  }
                })
              }))}
            </>
            <>
            {blocks && blocks.map(((blockElement, i) => {
              return (
                <div className='flex gap-6 w-full mb-6 flex-row' key={`form-block`+i}>
                  {
                    blockElement.fields.map((field, x) => {

                      if(field.input_type !== 'hidden'){

                        switch (field.type) {
                          case 'input':
                            return (
                              <div className="flex-1" key={`form-field`+i+`-`+x}>
                                  <label htmlFor={i+`-`+x} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{field.label}</label>
                                  <input type={field.input_type} id={i+`-`+x} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={field.label} required={field.required} name={convertToSafeInputFieldName(field.name)} />
                              </div>
                            )
                          case 'textarea':
                            return (
                              <div className="flex-1" key={`form-field`+i+`-`+x}>
                                  <label htmlFor={i+`-`+x} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{field.label}</label>
                                  <textarea type={field.input_type} id={i+`-`+x} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={field.label} required={field.required} name={convertToSafeInputFieldName(field.name)} ></textarea>
                              </div>
                            )
                          case 'checkbox':
                            return (
                              <div className="flex items-start mb-6 flex-1" key={`form-field`+i+`-`+x}>
                                <div className="flex items-center h-5">
                                  <input id={i+`-`+x} type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required={field.required} name={convertToSafeInputFieldName(field.name)} />
                                </div>
                                <label id={i+`-`+x} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{field.label}</label>
                              </div>
                            )
                          default:
                            return (
                              <div className="flex-1" key={`form-field`+i+`-`+x}>
                                  <label htmlFor={i+`-`+x} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{field.label}{field.type}{field.input_type}</label>
                                  <input type={field.input_type} id={i+`-`+x} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={field.label} required={field.required} name={convertToSafeInputFieldName(field.name)} />
                              </div>
                            );
                        }
                      }else{
                        return <></>
                      }
                  })
                  }
                </div>
              )
              
            }))}
            </>
            { successMessage !== "" ? (
              <div class="p-4 mb-6 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                <span class="font-medium">{successMessage}</span>
              </div>
            ):(<></>) }
            { errorMessage !== "" ? (
              <div class="p-4 mb-6 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span class="font-medium">{errorMessage}</span>
              </div>
            ):(<></>) }
              <div className='text-right'>
                <button type="submit" className='inline-block bg-primaryButtonDefaultBG hover:bg-primaryButtonHoverBG text-primaryButtonDefaultColor hover:text-primaryButtonHoverColor focus:ring-4 ring-primaryButtonHoverRing  hover:ring-primaryButtonDefaultRing focus:ring-primaryButtonDefaultRing font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:bg-white dark:text-black dark:hover:bg-gray-500 focus:outline-none dark:focus:ring-white'>
                  Submit
                </button>
              </div>
          </form>
        </div>
      </Parallax>
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
