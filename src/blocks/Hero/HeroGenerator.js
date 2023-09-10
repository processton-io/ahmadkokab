import React from 'react'
import DefaultHero from './Default';
import WithImageLeftToRight from './WithImageLeftToRight';

import WithUserAvatar from './WithUserAvatar';
import WithVideoLeftToRight from './WithVideoLeftToRight';

export default function HeroGenerator({ data }) {
  switch (data.variant) {
    case 'with_image_left_to_right':
      return (<WithImageLeftToRight data={data} />);
    case 'with_user_avatar':
      return (<WithUserAvatar data={data} />);
    case 'with_video_left_to_right':
      return (<WithVideoLeftToRight data={data} />);
    default:
      return (<DefaultHero data={data} />);
  }
  

  
}
