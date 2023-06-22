export function Field(label = 'Social Links', name = 'social_links') {
  return {
    label: label,
    name: name,
    widget: 'list',
    summary: '{{fields.platform}} {{fields.permalink}}',
    fields: [
      {
        label: 'Permalink',
        name: 'permalink',
        widget: 'string',
      },
      {
        label: 'Platform',
        name: 'platform',
        widget: 'select',
        options: ['email', 'phone', 'facebook','twitter', 'linkedin', 'youtube', 'instagram','calendar']
      },
      {
        label: 'Show in Header',
        name: 'show_in_header',
        widget: 'boolean',
        require: false,
      },
      {
        label: 'Show in Footer',
        name: 'show_in_footer',
        widget: 'boolean',
        require: false,
      }
    ],
  };
}

export default Field;
