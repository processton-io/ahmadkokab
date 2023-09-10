import React from 'react';
import { graphql } from 'gatsby';

import Hero from '@/blocks/Hero';
import Heros from '@/blocks/Heros';
import RecentArticles from '../blocks/RecentArticles';
import ContentImage from '../blocks/ContentImage';
import Perks from '../blocks/Perks';
import Content from '../blocks/Content';
import Form from '../blocks/Form';
import WideSlider from '../blocks/WideSlider';
import BreadCrumbs from './BreadCrumbs';

export default function PageBuilder({ frontmatter, preview = false }) {
  return (
    <>
      {frontmatter?.breadcrumbs && 
        <BreadCrumbs breadcrumbs={frontmatter.breadcrumbs} />
      }
      {frontmatter?.blocks &&
        frontmatter.blocks.map((block, i) => {
          
          switch (block.type) {
            case 'hero_slider':
              return <Heros key={i} data={block} />;
            case 'hero':
              return <Hero key={i} data={block} />;
            case 'recentArticles':
              return <RecentArticles key={i} identifier={`recent_article`+i} data={block} preview={preview} />;
            case 'content_image':
              return <ContentImage key={i} data={block} preview={preview} />;
            case 'perks':
              return <Perks key={i} data={block} preview={preview} />;
            case 'content':
              return <Content key={i} data={block} preview={preview} />;
            case 'form':
              return <Form key={i} block={block} preview={preview} />;
            case 'cards_slider':
              return <WideSlider key={i} identifier={`wide_slider`+i} data={block} preview={preview} />
            default:
              return (
                <div className='container mx-auto' key={i}>
                  <div className='text-center'>
                    Missing Section {block.type}
                  </div>
                </div>
              );
          }
        })}
    </>
  );
}

export const query = graphql`
  fragment Blocks on MarkdownRemarkFrontmatter {
    blocks {
      type
      title
      content
      variant
      height
      photo {
        image {
          childImageSharp {
            gatsbyImageData(
              width: 800
              quality: 72
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      buttons {
        button {
          content
          url
          variant
        }
      }
      
      heros {
        hero {
          title
          content
          variant
          color_theme
          ratio
          buttons {
            button {
              content
              url
              variant
            }
          }
          form
          bg_settings {
            variant
            overlay
            bg_color
            bg_video
            bg_photo {
              childImageSharp {
                gatsbyImageData(
                  width: 2048
                  quality: 70
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          photo{
            image {
                childImageSharp {
                  gatsbyImageData(
                    width: 400
                    quality: 72
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
          }
          video
          columns {
            title
            content
            photo{
              image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 150
                      quality: 72
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
            }
          }
        }
      }
      columns {
        title
        content
        variant
        permalink
        type
        photo{
          image {
              childImageSharp {
                gatsbyImageData(
                  width: 780
                  quality: 72
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
        }
      }
      form
    }
  }
`;
