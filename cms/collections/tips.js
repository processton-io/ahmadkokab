import { PermalinkField } from '../fields/permalink-field';
import seo from '../fields/seo';
import { ID, ImageField, backgroundSettingsField } from '../fields';

const collection = {
  name: 'tip',
  label: 'Tips',
  editor: {
    preview: true,
  },
  description: 'Tips collection',
  folder: 'content/tip/web',
  summary:
    "{{title}}",
  create: true,
  fields: [
    ID,
    {
      label: 'Type',
      name: 'type',
      widget: 'hidden',
      default: 'tip',
    },
    {
      label: 'Layout',
      name: 'layout',
      widget: 'hidden',
      default: 'tip-builder',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: '',
    },
    PermalinkField('tip'),
    {
      label: 'Skills Included',
      name: 'skills',
      widget: 'relation',
      collection: "skill",
      search_fields: ["title"],
      value_field: "id",
      display_fields: ['title'],
      multiple: true,
    },
    {
      label: 'Code',
      name: 'code',
      widget: 'code',
      allow_language_selection: true,
      keys: { code: 'code', lang: 'lang' }
    },
    {
      label: 'Body',
      name: 'body',
      widget: 'markdown',
      default: '',
      required: false,
    },
    seo,
  ],
};

export default collection;
