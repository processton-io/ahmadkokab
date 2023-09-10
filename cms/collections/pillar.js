import seo from '../fields/seo';
import { ID } from '../fields';
import Blocks from '../blocks';
import { PermalinkField } from '../fields/permalink-field';

const collection = {
  name: 'pillar',
  label: 'Pillar Pages',
  description: 'Pillar Pages For your Website',
  folder: 'content/pillar/web',
  create: true,
  fields: [
    ID,
    {
      label: 'Type',
      name: 'type',
      widget: 'hidden',
      default: 'page',
    },
    {
      label: 'Layout',
      name: 'layout',
      widget: 'hidden',
      default: 'pillar-builder',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    PermalinkField(),
    Blocks,
    seo,
  ],
};

export default collection;
