import seo from '../fields/seo';
import { BreadcrumbItem, Content, ID } from '../fields';
import Blocks from '../blocks';
import { PermalinkField } from '../fields/permalink-field';

const collection = {
  name: 'theme_doc',
  label: 'Theme Documentation',
  description: 'Theme Documentation Files',
  folder: 'content/pages/structure',
  edit: false,
  create: false,
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
      default: 'page-builder',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    PermalinkField(),
    {
      label: 'Breadcrumbs',
      name: 'breadcrumbs',
      widget: 'list',
      fields: [
        BreadcrumbItem
      ]
    },
    Blocks,
    seo,
  ],
};

export default collection;
