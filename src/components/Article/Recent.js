import React, { useState, useEffect, useRef } from 'react';
import { Link } from "gatsby";
import { } from '../../styles/slider.css';
import clsx from 'clsx';
import Image from '../../resolvers/Image'
import { useRecentArticles } from '../../hooks/useRecentArticles';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';

function NextArrow(props) {
  const { className, style, onClick } = props;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={"rounded-full hidden lg:block z-40 wslick-arrow next  " + className}
      style={{ ...style }}
      onClick={onClick}
      onKeyDown={onClick}
      role="tabbable"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ?
        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="23.5" cy="23.5" r="23.5" fill="#BEBEBE"></circle><path d="M20 14L30 24L20 34" stroke="#5A5A5A" strokeWidth="2"></path></svg>
        :
        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="23.5" cy="23.5" r="23.5" fill="#F7F7F7" /><path d="M20 14L30 24L20 34" stroke="#5A5A5A" strokeWidth="2" /></svg>
      }
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={"rounded-full hidden lg:block z-40 wslick-arrow prev bg-gray " + className}
      style={{ ...style }}
      onClick={onClick}
      onKeyDown={onClick}
      role="tabbable"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ?
        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="23.5" transform="matrix(-1 0 0 1 23.5 23.5)" fill="#BEBEBE"></circle><path d="M27 14L17 24L27 34" stroke="#5A5A5A" strokeWidth="2"></path></svg>
        :
        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="23.5" transform="matrix(-1 0 0 1 23.5 23.5)" fill="#F7F7F7" /><path d="M27 14L17 24L27 34" stroke="#5A5A5A" strokeWidth="2" /></svg>
      }
    </div>
  );
}

/**
 * Component
 */
export default function Recent({ identifier, title, widerContainer, ...props }) {
  
  const posts = useRecentArticles();

  let temporaryWidth = 550;

  if (typeof window !== `undefined`) {
    if (window.innerWidth <= 460) {
      temporaryWidth = window.innerWidth - 80;
    }
  }
  let slides = [];
  slides = slides.concat(posts);

  let SlideTheme = 'bg_image'
  
  let haveBullets = true

  let [pageWidth, setPageWidth] = useState(widerContainer ? 1280 : 1024)
  let [windowWidth, setWindowWidth] = useState(widerContainer ? 1280 : 1024)


  let [leftSpace, setLeftSpace] = useState(0)
  let [containerWidth, setContainerWidth] = useState((slides.length * 550))
  let [containerHeight, setContainerHeight] = useState(0)

  let [currentSlide, setCurrentSlide] = useState(0)
  let [xAxis, setXAxis] = useState(0)
  const [height, setHeight] = useState(0)
  const ref = useRef(0)
  let [slideWidth, setSlideWidth] = useState(widerContainer ? 920 : 460)
  let [windowIsResizing, setWindowIsResizing] = useState(true)


  useEffect(() => {
    var rtime;
    var timeout = false;
    var delta = 200;
    function handleResize() {
      rtime = new Date();
      if (timeout === false) {
        timeout = true;
        setTimeout(resizeEnd, delta);
      } else {
        setWindowIsResizing(true)
      }
    }
    function resizeEnd() {
      if (windowIsResizing === true) {
        setWindowIsResizing(false);
        if (new Date() - rtime < delta) {
          setTimeout(resizeEnd, delta);
        } else {
          timeout = false;
          if (typeof window !== `undefined`) {
            setPageWidth(window.innerWidth)
            if (window.innerWidth <= 460) {
              setWindowWidth(window.innerWidth)
              setSlideWidth(window.outerWidth - 80)

              if (windowWidth >= 1024) {
                setLeftSpace((windowWidth - 1024) / 4)
              }

              setXAxis(0)
            } else {

              setSlideWidth(widerContainer ? 920 : 460)

            }
            setContainerHeight(0)
            if (document.getElementById(identifier + '-wslick-track') != null) {
              setTimeout(function () {
                setContainerHeight(document.getElementById(identifier + '-wslick-track').clientHeight)
              }, 1000);
            }

          }



        }
      }
    }
    if (typeof window !== `undefined`) {
      // window.addEventListener('resize', )
      window.addEventListener('resize', handleResize)
      // window.addEventListener('orientationchange', handleResize)
      window.addEventListener("orientationchange", (event) => {
        setTimeout(handleResize, 200);
      });
    }
    setTimeout(handleResize, 500);
  }, [windowIsResizing]);






  if (!slides || slides.length < 1) {
    return ('')
  }

  let nextClick = function () {
    setCurrentSlide(currentSlide + 1)
    if (pageWidth > 1536) {
      setXAxis(xAxis - slideWidth - 40)
    } else if (pageWidth > 1280 && pageWidth < 1536) {
      setXAxis(xAxis - slideWidth - 40)
    } else if (pageWidth > 1024 && pageWidth < 1280) {
      setXAxis(xAxis - slideWidth - 55)
    } else if (pageWidth > 460 && pageWidth <= 1024) {
      setXAxis(xAxis - (slideWidth + 20))
    } else {
      setXAxis(xAxis - (slideWidth + (20)))
    }
  }

  let dotClick = function (index) {
    
    if(index < currentSlide){
      let difference = index - currentSlide;
      setCurrentSlide(index)
      let newAxis = 0
      if (pageWidth > 1536) {
        newAxis = (xAxis - ((slideWidth - 40) * difference))
      } else if (pageWidth > 1280 && pageWidth < 1536) {
        newAxis = (xAxis - ((slideWidth - 40) * difference))
      } else if (pageWidth > 1024 && pageWidth < 1280) {
        newAxis = (xAxis - ((slideWidth - 55) * difference))
      } else if (pageWidth > 460 && pageWidth <= 1024) {
        newAxis = (xAxis - ((slideWidth + 20) * difference))
      } else {
        newAxis = (xAxis - ((slideWidth + (20)) * difference))
      }
      
      setXAxis(newAxis)
    }else if(index > currentSlide){
      let difference = index - currentSlide;
      setCurrentSlide(index)
      if (pageWidth > 1536) {
        setXAxis(xAxis - ((slideWidth - 40) * difference))
      } else if (pageWidth > 1280 && pageWidth < 1536) {
        setXAxis(xAxis - ((slideWidth - 40) * difference))
      } else if (pageWidth > 1024 && pageWidth < 1280) {
        setXAxis(xAxis - ((slideWidth - 55) * difference))
      } else if (pageWidth > 460 && pageWidth <= 1024) {
        setXAxis(xAxis - ((slideWidth + 20) * difference))
      } else {
        setXAxis(xAxis - ((slideWidth + (20)) * difference))
      }
    }
    
  }
  let previousClick = function () {
    setCurrentSlide(currentSlide - 1)
    if (pageWidth > 1536) {
      setXAxis(xAxis + (slideWidth + 40))
    } else if (pageWidth > 1280 && pageWidth < 1536) {
      setXAxis(xAxis + (slideWidth + 40))
    } else if (pageWidth > 1024 && pageWidth < 1280) {
      setXAxis(xAxis + (slideWidth + 55))
    } else if (pageWidth > 460 && pageWidth <= 1024) {
      setXAxis(xAxis + (slideWidth + 20))
    } else {
      setXAxis(xAxis + (slideWidth + (20)))
    }
  }

  let sliderTitle = "You may also be interested in";
  if(title){
    sliderTitle = title
  }
  return (
    <div
      id={identifier}
      className={clsx("paragraph proc-wslider w-full px-0 overflow-hidden py-16 bg-gray-100", {
        [`${identifier}`]: true,
      })}>
      <div className={(widerContainer ? 'wider-title' : 'wide-title') + ' pb-16'}>
        <h3 className='text-5xl md:text-4xl px-6 lg:px-6 xl:px-0 font-bold text-black'>{sliderTitle}</h3>
      </div>
      <div className={'wslick-wslider wslick-initialized overflow-auto lg:overflow-hidden'}>
        {currentSlide > 0 ?
          <PrevArrow onClick={previousClick} />
          : ''}
        <div className={(widerContainer ? 'wslick-list wslick-list-wider' : 'wslick-list') + ' pb-16'} style={{
          width: `${slides.length * (slideWidth + 250 + (slideWidth / (widerContainer ? 4 : 8)))}px`,
        }}>
          <div id={identifier + '-wslick-track'} className={identifier + `-wslick-track wslick-track`} style={{
            width: `${slides.length * (slideWidth + 250 + (slideWidth / (widerContainer ? 4 : 8)))}px`,
            transform: `translate3d(${xAxis}px, 0px, 0px)`,
          }} >
            {slides.map((slide, index) => {
              
              if (slide === undefined || !slide.node) return ('')
              let thumbnail = [];
              let thumbnailUrl = '';
              let description = '';
              let path = '#';
              let entityType = 'Blog';
              let title = '';
              let linkText = '';
              
              if (slide.node && slide.node.fields && slide.node.fields.slug) {
                path = slide.node.fields.slug;
              }
              if (slide.node.frontmatter && slide.node.frontmatter.photo) {
                let image = getImage(slide.node.frontmatter.photo.image);
                let bgImage = convertToBgImage(image)
                if(bgImage && bgImage.fluid && bgImage.fluid.src){
                  thumbnailUrl = bgImage.fluid.src
                }

              }
              if (slide.node.excerpt && slide.node.excerpt) {
                description = slide.node.excerpt;
              }

              if (slide.node && slide.node.entityBundle) {
                entityType = slide.node.entityBundle;
              }
              if (slide.node.frontmatter && slide.node.frontmatter.title) {
                title = slide.node.frontmatter.title;
              }
              linkText = `Read the ` + entityType.replace('_', ' ');
              SlideTheme = index % 2 ==0 ? "bg_image" : "card"
              if(SlideTheme === "bg_image"){
                return (
                  <div className='wslick-slide wslick-active wslick-current bg-white mr-0 md:mr-8 lg:mr-16 ml-6 md:ml-6 lg:ml-6 xl:ml-0 bg-cover bg-no-repeat' key={index} ref={ref} style={{ width: slideWidth, height: 'auto', minHeight: containerHeight, backgroundImage: `url(`+thumbnailUrl+`)` }}>
                    <span className={"flex flex-col p-0 w-full "}>
                      <div className='p-10 pb-16'>
                        <p className='text-white text-2xl mb-8 py-3 capitalize'>{entityType.replace('_', ' ')}</p>
                        <h4 className="mb-12 text-5xl text-white font-bold">{title}</h4>
                        <div className="mb-12 text-2xl text-white">{description}</div>
                        <Link to={(path)} className="mb-5 text-proc-red font-bold text-2xl inline-block text-white">{linkText}</Link>
                      </div>
                    </span>
                  </div>
                )
              }else{
                return (
                  <div className='wslick-slide wslick-active wslick-current bg-white mr-0 md:mr-8 lg:mr-16 ml-6 md:ml-6 lg:ml-6 xl:ml-0' key={index} ref={ref} style={{ width: slideWidth, height: 'auto', minHeight: containerHeight }}>
                    <span className="flex flex-col p-0">
                      {thumbnailUrl ? (
                        <Image src={thumbnailUrl} className="max-h-96 object-cover overflow-hidden w-full" alt={thumbnail.alt} title={thumbnail.title} />
                      ) : ('')}
                      <div className='p-10 pb-16'>
                        <p className='text-grey text-2xl mb-2 py-3 capitalize'>{entityType.replace('_', ' ')}</p>
                        <h4 className="mb-12 text-5xl font-bold">{title}</h4>
                        <div className="mb-12 text-2xl">{(description)}</div>
                        <Link to={(path)} className="mb-5 text-proc-red font-bold text-2xl inline-block">{linkText}</Link>
                      </div>
                    </span>
                  </div>
                )
              }
            })}
            
          </div>
        </div>
        {currentSlide < (slides.length - 1) ?
          <NextArrow onClick={nextClick} />
          : ''}
      </div>
      <div className={(widerContainer ? 'wider-title' : 'wide-title') + ( haveBullets ? ' have-bullets ' : ' hidden ' ) + ''}>
        <ul className='text-center'>
          {slides.map((slide, index) => {
          
              return (
                <li key={`li-`+index} onClick={() => dotClick(index)} className={index + ' inline-block w-4 h-4 rounded-full p-0 mr-4 ' + (currentSlide === index ? ' bg-gray-400' : ' bg-gray-300')} ></li>
              )
          
          })}
        </ul>
      </div>
      
    </div>
  );
};