export const ID = { label: 'ID', name: 'id', widget: 'uuid' };
export const Title = {
  label: 'Title',
  name: 'title',
  widget: 'string',
  required: false,
};

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

export const HeightField = (initial, options = []) => ({
  label: 'Height',
  name: 'height',
  widget: 'select',
  default: initial,
  options: options,
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

export const backgroundImageField = (name = 'bg_image', fieldName = 'bg_photo') => ({
  label: 'Background Image',
  name: fieldName,
  widget: 'object',
  fields: [
    { label: 'BG Image', name, widget: 'image', required: false },
    { label: 'Alt', name: 'bg_alt', widget: 'string', required: false },
    { label: 'Enable Parallax', name: 'enable_parallax', widget: 'boolean', required: false },
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
    Buttons,
    ImageField('hero_image', 'hero_photo'),
    backgroundImageField('hero_bg_image', 'hero_bg_photo'),
    VariantField('default', ['default', 'visual_image_with_heading', 'full']),
    HeightField('default', ['auto', 'full', 'little_less', 'half']),
    Content,
  ],
};
export const Heros = {
  label: 'Heros',
  name: 'heros',
  widget: 'list',
  fields: [Hero],
};
