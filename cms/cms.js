import CMS from 'netlify-cms-app';
import { Widget as UuidWidget } from 'netlify-cms-widget-id';
import { Widget as PermalinkWidget } from 'netlify-cms-widget-permalink';

import forms from './collections/forms';
import pages from './collections/pages';
import theme_docs from './collections/theme_docs';
import pillar from './collections/pillar';
import blogs from './collections/blogs';
import authors from './collections/authors';
import settings from './collections/settings';
import PagePreview from './previews/Page';
import BlogPreview from './previews/Blog';
import PillarPreview from './previews/Pillar';

window.CMS_MANUAL_INIT = true;

const config = {
  config: {
    load_config_file: true,
    display_url: process.env.GATSBY_APP_URL,
    local_backend: true,
    backend: {
      name: 'git-gateway',
      branch: 'main',
    },
    slug: {
      encoding: 'ascii',
      clean_accents: true,
    },
    media_folder: '/static/img',
    public_folder: '/img',
    collections: [ pillar, pages, blogs, forms,authors, settings, theme_docs],
  },
};

CMS.registerPreviewStyle('../commons.css');
CMS.registerPreviewTemplate('pillar', PillarPreview);
CMS.registerPreviewTemplate('pages', PagePreview);
CMS.registerPreviewTemplate('blog', BlogPreview);
CMS.registerPreviewTemplate('theme_docs', PagePreview);

CMS.registerWidget(UuidWidget);
CMS.registerWidget(PermalinkWidget);

CMS.init(config);
