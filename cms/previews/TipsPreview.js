import React from 'react';
import TipBuilder from '../../src/Builders/TipBuilder';


export default class TipsPreview extends React.Component {
  render() {
    const title = this.props.widgetsFor('title').toJS();
    const body = this.props.widgetsFor('body').toJS();
    const code = this.props.widgetsFor('code').toJS();
    const relations = this.props.fieldsMetaData.toJS();
    let skills = [];
    if(relations.skills){
      for (const [key, skill] of Object.entries(relations.skills.skill)) {
        skills.push({
            node: {
              frontmatter: {
                id: skill.id,
                title: skill.title,
                permalink: skill.permalink,
                photo : skill.photo
              }
            }
          });
      }
    }
    
    const data = {
      'title': title?.data,
      'body' : body?.data,
      'code' : code?.data,
      'skills': skills
    }
    
    
    return (
      <>
        <TipBuilder data={data} />
      </>
    );
  }
}
