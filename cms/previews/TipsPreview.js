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
      console.log(relations.skills)
      for (const [key, skill] of Object.entries(relations.skills.skill)) {
        console.log(`${key}: ${skill}`);
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
    
    // const skillsCollect = this.props.fieldsMetaData.getIn(['skill', skills]);
    // const relations = this.props.fieldsMetaData.toJS();
    console.log(data)
    // var posts = this.props.widgetsFor('skills').map(function(skill, index) {
    //     console.log(skill)
    //     console.log(skill.getIn(['skill', 'id']))
    //     return skill
    // });
    // console.log(posts)
    
    return (
      <>
        <TipBuilder data={data} />
      </>
    );
  }
}
