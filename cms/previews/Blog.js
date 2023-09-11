import React from 'react';
import Blog from '../../src/components/Blog';

export default class BlogPreview extends React.Component {
  render() {
    const title = this.props.widgetsFor('title').toJS();
    const excerpt = this.props.widgetsFor('excerpt').toJS();
    const body = this.props.widgetsFor('body').toJS();
    const photo = this.props.widgetsFor('photo');
    // const bg_photo = this.props.widgetsFor('bg_photo');

    const thumbnail = photo.getIn(['data','image']);
    // console.log(bg_photo)
    // const background = bg_photo.getIn(['data','bg_image']);

    const date = this.props.widgetsFor('date').toJS();
    const data = {
      'title': title?.data,
      'excerpt' : excerpt?.data,
      'body' : body?.data,
      'thumbnail': thumbnail,
      'date': date.data,
      'showTime': true
    }
    // console.log(data)
    return (
      <>
        <Blog data={data} showTime={true}/>
      </>
    );
  }
}
