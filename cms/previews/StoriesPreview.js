import React from 'react';
import StoryBuilder from '../../src/Builders/StoryBuilder';


export default class StoriesPreview extends React.Component {
  render() {
    const title = this.props.widgetsFor('title').toJS();
    const excerpt = this.props.widgetsFor('excerpt').toJS();
    const body = this.props.widgetsFor('body').toJS();
    const date = this.props.widgetsFor('date').toJS();
    const data = {
      'title': title?.data,
      'excerpt' : excerpt?.data,
      'body' : body?.data,
      'date': date.data,
      'showTime': false
    }

    return (
      <>
        <StoryBuilder data={data} />
      </>
    );
  }
}
