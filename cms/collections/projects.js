import { PermalinkField } from '../fields/permalink-field';
import seo from '../fields/seo';
import { ID, ImageField, backgroundSettingsField } from '../fields';

const collection = {
  name: 'project',
  label: 'Projects',
  editor: {
    preview: true,
  },
  description: 'Projects',
  folder: 'content/projects/web',
  slug: '{{slug}}',
  summary:
    "{{title}} \r\n {{date | date('YYYY-MM-DD')}} \r\n {{body | truncate(70, '...')}}",
  create: true,
  fields: [
    ID,
    {
      label: 'Layout',
      name: 'layout',
      widget: 'hidden',
      default: 'project-builder',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: '',
    },
    {
      label: 'Skills Included',
      name: 'skills',
      widget: 'relation',
      collection: "skill",
      search_fields: ["title"],
      value_field: "id",
      display_fields: ['title','id'],
      multiple: true,
    },
    PermalinkField('projects'),
    ImageField(),
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
