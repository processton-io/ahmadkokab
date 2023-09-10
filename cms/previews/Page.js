import React from 'react';
import PageBuilder from '../../src/components/PageBuilder';

export default class PagePreview extends React.Component {
  render() {
    const blocks = this.props.widgetsFor('blocks').toJS();
    const breadcrumbs = this.props.widgetsFor('breadcrumbs').toJS();
    let blocksUpdated = [];
    let breadcrumbsUpdated = [];
    let hasBlocks = Array.isArray(blocks);
    let hasBreadcrumbs = Array.isArray(breadcrumbs);
    if (hasBlocks) {
      blocksUpdated = blocks.map((block) => block.data);
    }
    if(hasBreadcrumbs){
      breadcrumbsUpdated = breadcrumbs.map((breadcrumb)=> breadcrumb.data);
    }
    

    return (
      <div>
        {hasBlocks ? (
          <PageBuilder frontmatter={{
            blocks: blocksUpdated,
            breadcrumbs: breadcrumbsUpdated
          }} preview={true} />
        ) : (
          <div className='py-24 text-center flex items-center justify-center'>
            <h1>Add first block to start creating your website</h1>
          </div>
        )}
      </div>
    );
  }
}
