import { PermalinkField } from '../fields/permalink-field';
import seo from '../fields/seo';
import { ID, ImageField, backgroundSettingsField } from '../fields';

const collection = {
  name: 'skill',
  label: 'Skills',
  editor: {
    preview: true,
  },
  description: 'Skills',
  folder: 'content/skills/web',
  slug: '{{slug}}',
  summary:
    "{{title}}  - {{type}}",
  create: true,
  fields: [
    ID,
    {
      label: 'Layout',
      name: 'layout',
      widget: 'hidden',
      default: 'skill-builder',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: '',
    },
    {
      label: 'Type',
      name: 'type',
      widget: 'select',
      default: 'front_end',
      options: ["front_end", "backend", "windows_services", "dev_ops"],
    },
    PermalinkField('skills'),
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
