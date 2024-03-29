import React from 'react';
import BlogBuilder from '../../src/Builders/BlogBuilder';


export default class BlogPreview extends React.Component {
  render() {
    const title = this.props.widgetsFor('title').toJS();
    const excerpt = this.props.widgetsFor('excerpt').toJS();
    const body = this.props.widgetsFor('body').toJS();
    const photo = this.props.widgetsFor('photo');

    const thumbnail = photo.getIn(['data','image']);

    const date = this.props.widgetsFor('date').toJS();
    const data = {
      'title': title?.data,
      'excerpt' : excerpt?.data,
      'body' : body?.data,
      'thumbnail': thumbnail,
      'date': date.data,
      'showTime': true
    }
    
    return (
      <>
        <BlogBuilder data={data} showTime={true}/>
      </>
    );
  }
}
