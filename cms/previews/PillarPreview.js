import React from 'react';
import PillarBuilder from '../../src/Builders/PillarBuilder';


export default class Pillar extends React.Component {
  render() {
    const blocks = this.props.widgetsFor('blocks').toJS();
    let blocksUpdated = [];
    
    let hasBlocks = Array.isArray(blocks);
    if (hasBlocks) {
      blocksUpdated = blocks.map((block) => block.data);
    }

    return (
      <div>
        {hasBlocks ? (
          <PillarBuilder  pillars={blocksUpdated} preview={true} />
        ) : (
          <div className='py-24 text-center flex items-center justify-center'>
            <h1>Add first block to start creating your website</h1>
          </div>
        )}
      </div>
    );
  }
}
