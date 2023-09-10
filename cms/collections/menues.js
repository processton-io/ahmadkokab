
import { ID } from '../fields';
import navigationField from '../fields/navigation-field';
import { Label } from 'flowbite-react';
import { Title } from '../fields';
const collection = {
  name: 'menues',
  label: 'Menue',
  description: 'Menues for your website',
  folder: 'content/menues',
  create: true,
  editor: {
    preview: false,
  },
  fields: [
    ID,
    Title,
    {
      label: 'Nav Items',
      name: 'nav_item',
      widget: 'list',
      summary: 'Nav Items {{field.nav.length}}',
      fields: [
        navigationField()
      ]
    },
    {
      label: 'Layout',
      name: 'layout',
      widget: 'hidden',
      default: 'page-builder',
    }
  ],
};

export default collection;
