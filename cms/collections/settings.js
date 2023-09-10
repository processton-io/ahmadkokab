import navigationField from '../fields/navigation-field';
import {SocialField, ContactsField} from '../fields/social-field';
import { Title, Content, ImageField } from '../fields';

const collection = {
  name: 'settings',
  label: 'Settings',
  description: 'Settings for theme',
  files: [
    {
      label: 'General',
      name: 'general',
      file: 'src/settings/main.json',
      editor: {
        preview: false,
      },
      fields: [
        Title,
        ImageField()],
    },
    {
      label: 'Header Settings',
      name: 'header',
      file: 'src/settings/header.json',
      editor: {
        preview: false,
      },
      fields: [
        Title,
        ImageField(),
        navigationField(),
        {
          label: 'Enable Dark Mode',
          name: 'show_dark_mode',
          widget: 'boolean',
          required: true,
        },
        {
          label: 'Enable Mini Bar on top - for socal and contact',
          name: 'show_mini_bar',
          widget: 'boolean',
          required: false,
        },
        {
          label: 'Enable Social Links',
          name: 'show_social_links',
          widget: 'boolean',
          required: false,
        },
        SocialField('Social Links','social_links'),
        {
          label: 'Enable Contact Links',
          name: 'show_contact_links',
          widget: 'boolean',
          required: false,
        },
        ContactsField('Contact Links','contact_links')
      ],
    },
    {
      label: 'Footer Settings',
      name: 'footer',
      file: 'src/settings/footer.json',
      editor: {
        preview: false,
      },
      fields: [
        Title,
        navigationField(),
        {
          label: 'Enable Social Links',
          name: 'show_social_links',
          widget: 'boolean',
          required: false,
        },
        SocialField('Social Links','social_links'),
        {
          label: 'Enable Contact Links',
          name: 'show_contact_links',
          widget: 'boolean',
          required: false,
        },
        ContactsField('Contact Links','contact_links'),
        {
          label: 'Copyright text',
          name: 'copyright',
          widget: 'text',
          required: false,
        },
      ],
    },
    {
      label: 'Colors',
      name: 'colors',
      file: 'src/settings/colors.json',
      editor: {
        preview: false,
      },
      fields: [
        {
          label: 'header',
          name: 'header',
          widget: 'object',
          fields: [
            { label: 'Bg Color', name: 'bg', default: '#FFFFFF', widget : 'color', required: true },
            { label: 'Text Default Color', name: 'text_default_color', default: '#000000', widget : 'color', required: true },
            { label: 'Text Hover Color', name: 'text_hover_color', default: '#3b82f6', widget : 'color', required: true },
            { label: 'Text Default BG', name: 'text_default_bg', default: '#000000', widget : 'color', required: true },
            { label: 'Text Hover BG', name: 'text_hover_bg', default: '#3b82f6', widget : 'color', required: true },
            { label: 'Social Bar BG', name: 'social_bg', default: '#000000', widget : 'color', required: true },
            { label: 'Social Bar Text Default Color', name: 'social_text_default_color', default: '#FFFFFF', widget : 'color', required: true },
            { label: 'Social Bar Text Hover Color', name: 'social_text_hover_color', default: '#CCCCCC', widget : 'color', required: true },
            { label: 'Social Bar Text Default BG', name: 'social_text_default_bg', default: '#000000', widget : 'color', required: true },
            { label: 'Social Bar Text Hover BG', name: 'social_text_hover_bg', default: '#3b82f6', widget : 'color', required: true },
          ],
        },
        {
          label: 'Button',
          name: 'button',
          widget: 'object',
          fields: [
            {
              label: 'Primary',
              name: 'primary',
              widget: 'object',
              fields: [
                { label: 'Bg Color', name: 'bg', default: '#000000', widget : 'color', required: true },
                { label: 'Hover Bg Color', name: 'hover_bg', default: '#CCCCCC', widget : 'color', required: true },
                { label: 'Default Color', name: 'default_color', default: '#FFFFFF', widget : 'color', required: true },
                { label: 'Hover Color', name: 'hover_color', default: '#EEEEEE', widget : 'color', required: true },
                { label: 'Ring BG', name: 'ring', default: '#000000', widget : 'color', required: true },
                { label: 'Hover Ring BG', name: 'hover_ring', default: '#000000', widget : 'color', required: true }
              ],
            },
            {
              label: 'Secondary',
              name: 'secondary',
              widget: 'object',
              fields: [
                { label: 'Bg Color', name: 'bg', default: '#FFFFFF', widget : 'color', required: true },
                { label: 'Hover Bg Color', name: 'hover_bg', default: '#CCCCCC', widget : 'color', required: true },
                { label: 'Default Color', name: 'default_color', default: '#000000', widget : 'color', required: true },
                { label: 'Hover Color', name: 'hover_color', default: '#000000', widget : 'color', required: true },
                { label: 'Ring BG', name: 'ring', default: '#CCCCCC', widget : 'color', required: true },
                { label: 'Hover Ring BG', name: 'hover_ring', default: '#000000', widget : 'color', required: true }
              ],
            }
          ],
        },
      ],
    },
    {
      label: 'Site Metadata & SEO Settings',
      name: 'seo',
      file: 'src/settings/seo.json',
      summary: 'Change basic SEO configuration and site meta like URL',
      editor: {
        preview: false,
      },
      fields: [
        {
          label: 'Base title',
          name: 'baseTitle',
          widget: 'string',
          required: false,
        },
        {
          label: 'Separator',
          name: 'separator',
          widget: 'string',
          required: false,
        },
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          required: false,
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'string',
          required: false,
        },
        {
          label: 'Language Code',
          name: 'lang',
          widget: 'string',
          required: false,
        },
        {
          label: 'Keywords',
          name: 'keyword',
          widget: 'string',
          required: false,
        },
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
          required: false,
        },
        {
          label: 'Twitter Handle',
          name: 'twitterHandle',
          widget: 'string',
          required: false,
        },
        {
          label: 'Theme Color',
          name: 'themeColor',
          widget: 'color',
          required: false,
        },
      ],
    },
  ],
};

export default collection;
