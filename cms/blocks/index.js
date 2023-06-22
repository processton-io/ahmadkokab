import { Buttons, Title, Content, VariantField, ImageField, Heros, backgroundImageField, HeightField } from '../fields';


const Config = {
  label: 'Blocks',
  name: 'blocks',
  widget: 'list',
  types: [
    {
      label: 'Hero',
      name: 'hero',
      widget: 'object',
      summary: 'Hero {{fields.title}}',
      fields: [
        Title,
        Buttons,
        ImageField(),
        backgroundImageField(),
        VariantField('default', ['default', 'visual_image_with_heading', 'full']),
        HeightField('full', ['auto', 'full', 'little_less', 'half']),
        Content,
        {
          label: 'Columns',
          name: 'columns',
          widget: 'list',
          summary: '{{fields.title}}',
          fields: [
            Title,
            ImageField()
          ],
        },
      ],
    },
    {
      label: 'Slider',
      name: 'hero_slider',
      widget: 'list',
      summary: 'Slider {{fields.title}}',
      fields: [
        Title,
        Heros,
        VariantField('default', ['default']),
        HeightField('default', ['auto', 'full', 'little_less', 'half'])
      ],
    },
    {
      label: 'Content',
      name: 'content',
      widget: 'object',
      summary: 'Content {{fields.title}}',
      fields: [
        Title,
        Content, 
        VariantField('left-hand', ['left-hand','right-hand','centered']),
        backgroundImageField()
      ],
    },
    {
      label: 'CTA',
      name: 'content_image',
      widget: 'object',
      summary: 'CTA {{fields.title}}',
      fields: [
        Title,
        Content,
        Buttons,
        ImageField(),
        backgroundImageField(),
        VariantField('default', ['default', 'reversed']),
      ],
    },
    {
      label: 'Perks',
      name: 'perks',
      summary: '{{fields.title}}',
      widget: 'object',
      fields: [
        Title,
        VariantField('default', ['default', 'cards', 'gallery']),
        Content,
        backgroundImageField(),
        {
          label: 'Columns',
          name: 'columns',
          widget: 'list',
          summary: '{{fields.title}}',
          fields: [
            Title,
            {
              label: 'Show Popup',
              name: 'show_popup',
              widget: 'boolean',
              required: false,
            },
            {
              label: 'Permalink',
              name: 'permalink',
              widget: 'string',
              required: false,
            },
            Content,
            ImageField()
          ],
        },
      ],
    },
    {
      label: 'Recent Articles',
      name: 'recentArticles',
      widget: 'object',
      fields: [Title, backgroundImageField()],
    },
    {
      label: 'Form',
      name: 'form',
      widget: 'object',
      fields: [
        Title,
        Content,
        backgroundImageField(),
        ImageField(),
        {
          label: 'Form',
          name: 'form',
          widget: 'relation',
          collection: 'forms',
          search_fields: ['title'],
          display_fields: ['{{id}} - {{title}}'],
          value_field: 'id',
          required: false,
        },
      ],
    },
  ],
};

export default Config;
