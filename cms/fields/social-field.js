export function SocialField(label = 'Social Links', name = 'social_links') {
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
        options: ['facebook','twitter', 'linkedin', 'youtube', 'instagram']
      }
    ],
  };
}

export function ContactsField(label = 'Contact Links', name = 'contact_links') {
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
        options: ['email', 'phone' , 'calendar']
      }
    ],
  };
}
