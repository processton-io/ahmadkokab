import React from 'react';
import TipBuilder from '../../src/Builders/TipBuilder';


export default class SkillsPreview extends React.Component {
  render() {
    const title = this.props.widgetsFor('title').toJS();
    const excerpt = this.props.widgetsFor('excerpt').toJS();
    const body = this.props.widgetsFor('body').toJS();
    const thumbnail = this.props.widgetsFor('thumbnail').toJS();
    const date = this.props.widgetsFor('date').toJS();
    const data = {
      'title': title?.data,
      'excerpt' : excerpt?.data,
      'body' : body?.data,
      'thumbnail': thumbnail?.data,
      'date': date.data,
      'showTime': false
    }
    return (
      <>
        <TipBuilder data={data} />
      </>
    );
  }
}
