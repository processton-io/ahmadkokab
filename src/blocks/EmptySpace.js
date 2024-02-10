import React from 'react'
import clsx from 'clsx';

export default function EmptySpace({ data }) {
  
      return (
        <div className={ 
          clsx({
            "flex relative w-full": true,
            "h-6": data.variant === '25px', 
            "h-12": data.variant === '50px', 
            "h-16": data.variant === '75px', 
            "h-24": data.variant === '100px', 
            "h-32": data.variant === '125px', 
            "h-36": data.variant === '150px', 
            "h-44": data.variant === '175px'
            
            })}>
        </div>
      )  
  
}