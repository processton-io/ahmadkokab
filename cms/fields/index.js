export const ID = { label: 'ID', name: 'id', widget: 'uuid' };
export const Title = {
  label: 'Title',
  name: 'title',
  widget: 'string',
  required: false,
};

export const Link = {
  label: 'Link',
  name: 'link',
  widget: 'string',
  required: false,
}

export const Content = {
  label: 'Content',
  name: 'content',
  widget: 'markdown',
  required: false,
};

export const VariantField = (initial, options = []) => ({
  label: 'Variant',
  name: 'variant',
  widget: 'select',
  default: initial,
  options: options,
});

export const ContentDivision = (initial, options = []) => ({
  label: 'Ratio',
  name: 'ratio',
  widget: 'select',
  default: initial,
  options: ['1/11', '2/10', '3/9', '4/8', '5/7', '6/6', '7/5', '8/4', '9/3', '10/2', '11/1'],
});

export const HeightField = (initial) => ({
  label: 'Height',
  name: 'height',
  widget: 'select',
  default: initial,
  options: ['auto', 'full', "80vh","60vh","40vh","20vh"],
});

export const ColorTheme = (initial) => ({
  label: 'Color Theme',
  name: 'color_theme',
  widget: 'select',
  default: initial,
  options: ['dark', "white"],
});
export const Overlay = (initial) => ({
  label: 'Overlay',
  name: 'overlay',
  widget: 'select',
  default: initial,
  options: ['no-overlay','dark', "white"],
});

export const ImageField = (name = 'image', fieldName = 'photo') => ({
  label: 'Image',
  name: fieldName,
  widget: 'object',
  fields: [
    { label: 'Image', name, widget: 'image', required: false },
    { label: 'Alt', name: 'alt', widget: 'string', required: false },
  ],
});

export const ImagesField = (label) => ({
  label: 'Images',
  name: 'images',
  widget: 'image',
  allow_multiple: true
});

export const backgroundSettingsField = () => ({
  label: 'Background Settings',
  name: 'bg_settings',
  widget: 'object',
  collapsed:true,
  fields: [
    VariantField('no-bg',['no-bg','bg-image','bg-image-parralax','bg-color']),
    Overlay('no-overlay'),
    { label: 'Image', name: 'bg_photo', widget: 'image', required: false },
    { label: 'Color', name: 'bg_color', widget: 'color', required: false },
    { label: 'Video', name: 'bg_video', widget: 'string', required: false },
  ],
});

export const Button = {
  label: 'Button',
  name: 'button',
  widget: 'object',
  collapsed: true,
  fields: [
    {
      label: 'Content',
      name: 'content',
      widget: 'string',
      required: false,
    },
    {
      label: 'URL',
      name: 'url',
      widget: 'string',
      required: false,
    },
    VariantField('default', ['default', 'arrow', 'button', 'secondary', 'outlined']),
  ],
};

export const Buttons = {
  label: 'Buttons',
  summary: 'Buttons',
  name: 'buttons',
  widget: 'list',
  fields: [Button],
};
export const Hero = {
  label: 'Hero',
  name: 'hero',
  widget: 'object',
  summary: 'Slide {{fields.title}}',
  fields: [
    Title,
    VariantField('default', [
      'default', 'visual_image_with_heading',
      {
        label: 'Default',
        value: 'default'
      },
      {
        label: 'With Image Left to right',
        value: 'with_image_left_to_right'
      },
      {
        label: 'With Video Left to right',
        value: 'with_video_left_to_right'
      },
      {
        label: 'With User Avatar',
        value: 'with_user_avatar'
      },
      
    ]),
    ContentDivision('8/4'),
    ColorTheme('dark'),
    backgroundSettingsField(),
    ImageField(),
    { label: 'Video URL', name: 'video', widget: 'string', required: false },
    Content,
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
    Buttons,
    {
      label: 'Columns',
      name: 'columns',
      widget: 'list',
      summary: '{{fields.title}}',
      fields: [
        Title,
        {
          label: 'Permalink',
          name: 'permalink',
          widget: 'string',
          required: false,
        },
        ImageField()
      ],
    }
  ],
};
export const Heros = {
  label: 'Heros',
  name: 'heros',
  widget: 'list',
  summary: 'Slide',
  fields: [Hero],
};

export const BreadcrumbItem = {
  label: 'Breadcrumb Item',
  name: 'breadcrumb_item',
  widget: 'object',
  fields: [
    Title,
    Link
  ],
};
