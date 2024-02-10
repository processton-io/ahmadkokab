import React from 'react';
import Recent from '../components/Article/Recent';

export default function RecentArticles({ data,identifier, preview }) {


  return (
    <section>
      
        {preview ? 'Articles will show up here' : <Recent settings={data.bg_settings} widerContainer={false} title={data?.title} identifier={identifier} />}
      
    </section>
  );
}
